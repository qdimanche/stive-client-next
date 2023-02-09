import React, {useState} from 'react';
import FilterBar from "./UI/FilterBar";
import {BsHeart, BsHeartFill, BsStar, BsStarFill} from "react-icons/bs";
import Button from "./UI/Button";
import Image from "next/image";
import fetcher from "../../lib/fetcher";
import Spinner from "@/components/UI/Spinner";
import Error from "@/components/UI/Error";
import Link from "next/link";


const ProductRecommandation = () => {

	const {data, isLoading, isError} = fetcher('product');
	if (isLoading) return <Spinner></Spinner>
	if (isError) return <Error></Error>

	return (
		<div className={''}>
			<h2 className={'lg:mt-14 mt-6 mb-10'}>Des produits rien que pour vous !</h2>

			<div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-12 ">
				{
					data.map((value, index) => (
						<Product key={index} data={value}/>
					))
				}
			</div>

		</div>
	);
};

export default ProductRecommandation


export const Product = ({data}) => {

	const [isHover, setIsHover] = useState(false);
	const {name, category, price, productImages, id} = data;

	return (
		<Link href={`/products/${id}`}>
			<div className={"flex flex-col space-y-4"}>
				<div className={'rounded-[10px] overflow-hidden relative'}>
					<Image
						width={400}
						height={400}
						src={productImages?.[0]?.url}
						className={'object-cover aspect-square'} alt={""}/>
					<div
						className={'absolute top-3 right-3 bg-white rounded-[999px] p-2 overflow-hidden cursor-pointer'}
						onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
						{
							isHover ? <BsHeartFill color={"black"} size={20}/>
								: <BsHeart color={"black"} size={20}/>
						}
					</div>

				</div>
				<div className={'grid grid-cols-[2fr_1fr]'}>
					<p className={'font-semibold'}>{name || ""}</p>
					<p className={'font-bold justify-self-end'}>{(price + "€") || "Aucun prix"}</p>
				</div>
				<p className={'text-sm'}>{category?.name || ""}</p>
				<Button variant={"black"} text={"Commander"}/>
			</div>
		</Link>
	)
}
