import React, {useState} from 'react';
import Image from "next/image"
import {BsStar, BsStarFill} from "react-icons/bs";
import Button from "@/components/UI/Button";
import Counter from "@/components/UI/Counter";
import getPost from "../../../lib/helper";
import Head from "next/head";
import {SWRConfig} from "swr";
import Format from "@/layout/Format";
import {useRouter} from "next/router";
import fetcher from "../../../lib/fetcher";
import Spinner from "@/components/UI/Spinner";
import Error from "@/components/UI/Error";
import {useCart } from "react-use-cart";
import {data} from "autoprefixer";

const ProductId = ({fallback}) => {

	const router = useRouter()
	const {productId} = router.query
	const {data, isLoading, isError} = fetcher(`product/${productId}`);
	const {data: dataStock } = fetcher(`stock/product/${productId}/sum`);

	if (isLoading) return <Spinner></Spinner>
	if (isError) return <Error></Error>

	return (
		<SWRConfig value={ { fallback }}>
			<Head>
				<title>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</title>
				<meta property="og:title" content="Athletid"/>
				<meta property="og:type" content="article"/>
			</Head>

			<Format>
				<Product {...data} stock={dataStock}></Product>
			</Format>

		</SWRConfig>


	);
};

export default ProductId;


function Product({name, description, productImages, id, price, category, stock}) {

	const { addItem, items, removeItem, updateItemQuantity } = useCart();

	const [quantity, setQuantity] = useState(1);

	const handleChangeQuantity = (q) => {
		if (q > 0) {
			setQuantity(q);
		}
	}

	const handleAddItem = () => {

		const findItem = items.find((e) => e.id === id);

		if (findItem) {
			updateItemQuantity(id, findItem?.quantity + quantity);
		} else {
			const item = {
				id: id,
				name: name,
				price: price,
				category: category?.name,
				image: productImages[0]?.url
			}
			addItem(item, quantity);
		}
	}

	const displayDeleteButton = () => {
		const findItem = items.find((e) => e.id === id);

		if (findItem) {
			return (
				<Button onClick={() => removeItem(id)} text={"Supprimer"} />
			)
		}

	}

	return (<div className={'grid md:grid-cols-2 md:gap-12 gap-6 mt-40 '}>
		<div className={'space-y-6'}>
			<div className={"aspect-square relative rounded-md overflow-hidden"}>
				<Image layout={"fill"} className={"object-cover"}
				       src={productImages[0]?.url}/>
			</div>

		</div>
		<div className={'flex flex-col space-y-6'}>
			<p className={'text-underline'}>{category.name || ""}</p>
			<h1>{name}</h1>
			<p>{description}</p>
			<div className={'w-1/4'}>
				<Counter num={quantity} onChange={handleChangeQuantity} />
			</div>
			<div>{stock <= 0 || stock < quantity ? "Ce produit n'est plus disponible" : "Ce produit est en stock"}</div>


			<div className={"flex space-x-6"}>
				{stock > 0 && stock >= quantity &&
					<Button onClick={handleAddItem} variant={"black"} text={"Commander"}/>
				}
				{displayDeleteButton()}
			</div>
		</div>

	</div>)
}


export async function getStaticProps({params}) {
	const products = await getPost(params.productId);

	return {
		props: {
			fallback: {
				'/product': products
			}
		}
	}
}

export async function getStaticPaths() {
	const products = await getPost();
	const paths = products.map(value => {
		return {
			params: {
				productId: value.id.toString()
			}
		}
	})

	return {
		paths, fallback: false
	}
}
