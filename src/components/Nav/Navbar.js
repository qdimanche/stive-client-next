import Logo from '../../assets/images/logo.png'
import Image from "next/image";
import {CiShoppingCart, CiUser} from 'react-icons/ci';
import Link from "next/link";
import Burger from "@/components/Nav/Burger";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

const Navbar = () => {

	const router = useRouter();
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const [input, setInput] = useState("");

	useEffect(() => {
		click ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible";
	}, [click])

	const handleSearch = (e) => {
		e.preventDefault();
		router.push('/search?q=' + input)
	}

	return (<div className={'fixed py-6 flex justify-between lg:gap-10 gap-4 items-center bg-white z-[999] max-w-[1024px] w-full top-0'}>

		<Link href={"/"}>
			<Image src={Logo} width={130} height={50} alt={"Logo Stive"}/>
		</Link>

		<div className="">
			<form className="" onSubmit={handleSearch}>
				<div className="relative">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
					<input
						value={input}
						onChange={(e) => setInput(e.currentTarget.value)}
						type="text"
						placeholder="Rechercher"
						className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
					/>
				</div>
			</form>
		</div>
		<div className={'md:flex hidden space-x-6 items-center'}>
			<Link href={'/panier'}>
				<CiShoppingCart size={30}/>
			</Link>
		</div>
		<div className={'z-[900] w-[2rem] md:hidden'} onClick={handleClick}>
			{click ? (<Burger/>) : (<Burger/>)}
		</div>


	</div>);
};

export default Navbar;
