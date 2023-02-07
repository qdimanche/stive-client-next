import {useEffect, useState} from "react";
import {BsPlus} from "react-icons/bs";
import {AiOutlineMinus} from "react-icons/ai";

const Counter = () => {
	
	const [counter, setCounter] = useState(1);
	
	return (
		<div className={'w-full relative'}>
			<button
				className={'right-2 absolute top-1/2 transform -translate-y-1/2'}
				onClick={() => {
				setCounter(counter+1)
			}
			}>
				<BsPlus size={30}/>
			</button>
			<button
				className={'left-2 absolute top-1/2 transform -translate-y-1/2'}
				onClick={() => {
				setCounter(counter-1)
			}
			}>
				<AiOutlineMinus size={30}/>
			</button>
			<input type="text" className={'bg-black/10 p-3 rounded-md w-full text-center'} value={counter}/>
		</div>
	);
};

export default Counter;