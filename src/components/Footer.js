import Logo from "../assets/images/logo.png"
import Image from "next/image";

const Footer = () => {
	return (
		
		<footer className="border-black/10 md:py-8 mt-20">
			<div className="sm:flex sm:items-center sm:justify-between">
				<a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
					<Image width={130} height={43} src={Logo} className=" mr-3" alt="Flowbite Logo"/>
				</a>
				<span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© <a
					href="https://flowbite.com/" className="hover:underline">Stive™</a>. Tous droits réservés.
    </span>
			</div>
		</footer>
	
	);
};

export default Footer;