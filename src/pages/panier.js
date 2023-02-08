import React from 'react';
import Format from "@/layout/Format";
import Image from "next/image";
import Button from "@/components/UI/Button";

const Panier = () => {
	return (<Format>
		<div className={'grid lg:grid-cols-[2fr_1fr] lg:gap-12 gap-6 mt-28 mb-6 '}>
			<div>
				<Review/>
				<Delivery/>
			</div>
			<Payment/>
		
		</div>
	
	</Format>);
};

export default Panier;


function Review() {
	return (<div className={' flex flex-col p-8 border border-black/20 rounded-md'}>
		<h1 className={'font-semibold text-2xl'}>Examiner les détails et l&apos;expédition</h1>
		<div className={'grid grid-cols-[1fr_2fr] gap-8 mt-12 mb-4'}>
			<div className={'aspect-square relative rounded-md overflow-hidden'}>
				<Image
					src={"https://images.unsplash.com/photo-1545608508-78f351665a1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}
					layout={"fill"} className={'object-cover'}/>
			</div>
			<div className={'flex flex-col space-y-6'}>
				<div className={'flex justify-between'}>
					<span className={'font-bold text-2xl'}>Vin de Gasconne</span>
					<span className={'font-semibold'}>345,50€</span>
				</div>
				<div className={'flex justify-between'}>
					<span>Couleur : rouge</span>
					<span>Quantité : 1</span>
				</div>
			</div>
		
		</div>
	</div>)
	
}


function Delivery() {
	return (<div className={'flex flex-col p-8 border border-black/20 rounded-md mt-8'}>
		<h2 className={'font-semibold text-2xl'}>Informations de livraison</h2>
		
		<div className={'flex flex-col mt-8 space-y-6'}>
			<div className={'grid grid-cols-[1fr_4fr] items-center'}>
				<label>Nom</label>
				<input type="text" placeholder={"Votre nom"} className={'p-3 bg-black/5 rounded-md'}/>
			</div>
			<div className={'grid grid-cols-[1fr_4fr] items-center'}>
				<label>Prénom</label>
				<input type="text" placeholder={"Votre nom"} className={'p-3 bg-black/5 rounded-md'}/>
			</div>
			<div className={'grid grid-cols-[1fr_4fr] items-center'}>
				<label>Email</label>
				<input type="text" placeholder={"Votre nom"} className={'p-3 bg-black/5 rounded-md'}/>
			</div>
			<div className={'grid grid-cols-[1fr_4fr] items-center'}>
				<label>Adresse</label>
				<input type="text" placeholder={"Votre nom"} className={'p-3 bg-black/5 rounded-md'}/>
			</div>
		
		</div>
	</div>)
}

function Payment() {
	return (<div className={' flex flex-col p-8 border border-black/20 rounded-md'}>
		<h2 className={'font-semibold text-2xl mb-8'}>Détails de paiement</h2>
		
		<form>
			<fieldset>
				<div className={'space-y-3'}>
					<div className={'space-x-3'}>
						<input type="radio" id="contactChoice1" name="contact" value="email"/>
						<label htmlFor="contactChoice1">Email</label>
					</div>
					<div className={'space-x-3'}>
						<input type="radio" id="contactChoice2" name="contact" value="phone"/>
						<label htmlFor="contactChoice2">Phone</label>
					</div>
				</div>
				
				<div className={'space-y-6 mt-8'}>
					<div className={'flex flex-col space-y-3'}>
						<label>Adresse</label>
						<input type="text" placeholder={"Votre nom"} className={'p-3 bg-black/5 rounded-md'}/>
					</div>
					<div className={'flex flex-col space-y-3'}>
						<label>Adresse</label>
						<input type="text" placeholder={"Votre nom"} className={'p-3 bg-black/5 rounded-md'}/>
					</div>
					<div className={'flex flex-col space-y-3'}>
						<label>Adresse</label>
						<input type="text" placeholder={"Votre nom"} className={'p-3 bg-black/5 rounded-md'}/>
					</div>
				</div>
				
				<div className={'mt-8'}>
					<Button variant={"black"} text={"Commander"} type="submit"/>
				</div>
			</fieldset>
		</form>
	</div>)
}