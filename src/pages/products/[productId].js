import React from 'react';
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
				<Product {...data}></Product>
			</Format>
		
		</SWRConfig>

	
	);
};

export default ProductId;


function Product({name, description, productImages, id, price}) {
	
	const { addItem, items, removeItem } = useCart();
	
	return (<div className={'grid md:grid-cols-2 md:gap-12 gap-6 mt-40 '}>
		<div className={'space-y-6'}>
			<div className={"aspect-square relative rounded-md overflow-hidden"}>
				<Image layout={"fill"} className={"object-cover"}
				       src={productImages[0].url}/>
			</div>
		
		</div>
		<div className={'flex flex-col space-y-6'}>
			<h1>{name}</h1>
			<p>{description}</p>
			<div className={'flex space-x-1'}>
				<BsStarFill/>
				<BsStarFill/>
				<BsStarFill/>
				<BsStarFill/>
				<BsStar/>
			</div>
			<div className={'w-1/4'}>
				<Counter/>
			</div>
			
			
			<div className={"flex space-x-6"}>
				<Button onClick={() => addItem({
					id: 1 + items.length,
					productId: id,
					name: name,
					price: price,
					quantity: 23
				})} variant={"black"} text={"Commander"}/>
				{JSON.stringify(items)}
				{items?.map((i) => <button onClick={() => removeItem(i.id)}>remove</button>)}
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