import React, {useState} from 'react';
import Image from "next/image"
import Format from "@/layout/Format";
import {BsStar, BsStarFill} from "react-icons/bs";
import Button from "@/components /UI/Button";
import Counter from "@/components /UI/Counter";

const Page = () => {
	return (<Format>
			<Product/>
		</Format>
	
	);
};

export default Page;


function Product() {
	
	
	return (<div className={'grid md:grid-cols-2 md:gap-12 gap-6 lg:mt-14 mt-6 '}>
			<div className={'space-y-6'}>
				<div className={"aspect-square relative rounded-md overflow-hidden"}>
					<Image layout={"fill"} className={"object-cover"}
					       src={"https://images.unsplash.com/photo-1545608508-78f351665a1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}/>
				</div>
				<div className={'grid grid-cols-4 gap-6'}>
					<div className="aspect-square relative rounded-md overflow-hidden">
						<Image layout={"fill"} className={"object-cover"}
						       src={"https://images.unsplash.com/photo-1545608508-78f351665a1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}/>
					</div>
					<div className="aspect-square relative rounded-md overflow-hidden">
						<Image layout={"fill"} className={"object-cover"}
						       src={"https://images.unsplash.com/photo-1545608508-78f351665a1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}/>
					</div>
					<div className="aspect-square relative rounded-md overflow-hidden">
						<Image layout={"fill"} className={"object-cover"}
						       src={"https://images.unsplash.com/photo-1545608508-78f351665a1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}/>
					</div>
					<div className="aspect-square relative rounded-md overflow-hidden">
						<Image layout={"fill"} className={"object-cover"}
						       src={"https://images.unsplash.com/photo-1545608508-78f351665a1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}/>
					</div>
				</div>
			
			</div>
			<div className={'flex flex-col space-y-6'}>
				<h1>Vin de Gasconne</h1>
				<p>id nibh tortor id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae sapien
					pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas sed
					tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna eget est lorem
					ipsum dolor sit amet</p>
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
					<Button variant={"black"} text={"Commander"}/>
					<Button variant={"blackFill"} text={"Commander"}/>
				</div>
			</div>
		
		</div>)
}