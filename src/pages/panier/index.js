import React, {useEffect, useState} from 'react';
import Format from "@/layout/Format";
import Image from "next/image";
import Button from "@/components/UI/Button";
import {useCart} from "react-use-cart";
import Counter from "@/components/UI/Counter";
import axios from "axios";
import {apiBackend} from "../../../lib/helper";
import {useRouter} from "next/router";

function Review(props) {

	const { items, onChangeQuantity } = props;
	const { removeItem} = useCart()

	return (<div className={' flex flex-col p-8 border border-black/20 rounded-md'}>
		<h1 className={'font-semibold text-2xl'}>Examiner les détails et l&apos;expédition</h1>
		{items && items?.map((i) => (
			<div key={i.id} className={'grid grid-cols-[1fr_2fr] gap-8 mt-12 mb-4'}>
				<div className={'aspect-square relative rounded-md overflow-hidden'}>
					<Image
						src={i?.image}
						layout={"fill"} className={'object-cover'}/>
				</div>
				<div className={'flex flex-col space-y-6'}>
					<div className={'flex justify-between'}>
						<span className={'font-bold text-2xl'}>{i?.name}</span>
						<span className={'font-semibold'}>{i?.price}€</span>
					</div>
					<div className={'flex flex-col w-1/3 space-y-6'}>
						<span>Catégorie : {i?.category}</span>
						<div className={'space-y-3'}>
							<span className={''}>Quantité :</span>
							<Counter num={i?.quantity} onChange={(d) => onChangeQuantity?.(i?.id, d)} />
						</div>
						
					</div>
				</div>
				<Button onClick={() => removeItem(i?.id)} text={"Supprimer"} />
			</div>
		))}
	</div>)

}

const Index = () => {

	const { items, updateItemQuantity, isEmpty: isEmptyC, cartTotal, emptyCart } = useCart()
	const [isEmpty, setIsEmpty] = useState(true);
	const [carts, setCarts] = useState([]);
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const router = useRouter();

	useEffect(() => {
		console.log(isEmptyC)
		if (!isEmptyC) setIsEmpty(false)
	}, [isEmptyC]);

	useEffect(() => {
		if (items) {
			setCarts(items);
		}
	}, [items]);

	const handleChangeQuantity = (id, q) => {
		if (q > 0) {
			updateItemQuantity(id, q);
		}
	}

	const handleSubmit = async () => {
		const send = {
			data: items?.map((e) => ({ id: e.id, quantity: e.quantity })),
			email,
			address
		}
		const data = await axios.post(apiBackend + '/order', send);
		if (data.data) {
			emptyCart()
			await router.push('/panier/merci?id=' + data.data?.id)
		}
	}

	return (<Format>
		<div className={'grid lg:grid-cols-[2fr_1fr] lg:gap-12 gap-6 mt-28 mb-6 '}>
			{isEmpty ? (
				<div>{"Vous n'avez pas de produit."}</div>
			) : (
				<>
					<div>
						<Review items={carts} onChangeQuantity={handleChangeQuantity}/>
					</div>
					<div className={' flex flex-col p-8 border border-black/20 rounded-md'}>
						<h2 className={'font-semibold text-2xl'}>Détails de paiement</h2>


							<fieldset>
								<div className={'space-y-6 mt-8'}>
									<div>
										Total : {cartTotal}€
									</div>
									<div className={'flex flex-col space-y-3'}>
										<label>E-mail</label>
										<input value={email} onChange={(e) => setEmail(e.currentTarget.value)} type="text" placeholder={"Votre e-mail"} className={'p-3 bg-black/5 rounded-md'}/>
									</div>
									<div className={'flex flex-col space-y-3'}>
										<label>Adresse</label>
										<input value={address} onChange={(e) => setAddress(e.currentTarget.value)} type="text" placeholder={"Votre adresse"} className={'p-3 bg-black/5 rounded-md'}/>
									</div>
								</div>

								<div className={'mt-8'}>
									<Button onClick={handleSubmit} variant={"black"} text={"Commander"} />
								</div>
							</fieldset>

					</div>
				</>
			)}

		</div>

	</Format>);
};

export default Index;
