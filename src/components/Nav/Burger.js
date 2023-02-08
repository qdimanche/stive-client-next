import React, {useState} from 'react';

const Burger = () => {
	
	
	const [open, setOpen] = useState(false);
	
	return (
		<div>
			<div
				className={`w-[2rem] h-[2rem] flex flex-col justify-center cursor-pointer duration-[100ms] overflow-hidden'}`} onClick={() => setOpen(!open)}>
				<div
					className={`w-[2rem] h-[2px] rounded-[2px] bg-black cursor-pointer transtion-[all 0.4s linear] duration-300 ${open ? 'rotate-[-45deg] ' : 'rotate-0'}`}></div>
				<div
					className={`w-[2rem] h-[2px] rounded-[2px] bg-black cursor-pointer transtion-[all 0.4s linear] duration-300 ${open ? 'rotate-[45deg] mt-0' : 'rotate-0 mt-[10px]'}`}></div>
			</div>
		
		</div>
	);
};

export default Burger;