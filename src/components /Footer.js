import Logo from "../assets/images/logo.png"
import Image from "next/image";

const Footer = () => {
	return (
		
		<footer className="p-4 border-black/10 md:py-8 mt-20">
			<div className="sm:flex sm:items-center sm:justify-between">
				<a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
					<Image width={130} height={43} src={Logo} className=" mr-3" alt="Flowbite Logo"/>
				</a>
				<ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
					<li>
						<a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
					</li>
					<li>
						<a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
					</li>
					<li>
						<a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
					</li>
					<li>
						<a href="#" className="hover:underline">Contact</a>
					</li>
				</ul>
			</div>
			<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
			<span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© <a
				href="https://flowbite.com/" className="hover:underline">Stive™</a>. Tous droits réservés.
    </span>
		</footer>
	
	);
};

export default Footer;