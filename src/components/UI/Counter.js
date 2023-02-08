import {useEffect, useState} from "react";
import {BsPlus} from "react-icons/bs";
import {AiOutlineMinus} from "react-icons/ai";
import Button from "@/components/UI/Button";
import PropTypes from "prop-types";

const Counter = (props) => {

	const { num, onChange } = props;

	return (
		<div className={'w-full relative'}>
			<button
				className={'right-2 absolute top-1/2 transform -translate-y-1/2'}
				onClick={() => {
					onChange?.(num + 1)
				}
			}>
				<BsPlus size={30}/>
			</button>
			<button
				className={'left-2 absolute top-1/2 transform -translate-y-1/2'}
				onClick={() => {
					onChange?.(num - 1)
				}
			}>
				<AiOutlineMinus size={30}/>
			</button>
			<input type="text" className={'bg-black/5 p-3 rounded-md w-full text-center'} value={num}/>
		</div>
	);
};

Button.propTypes = {
	num: PropTypes.number,
	onChange: PropTypes.func,
};

export default Counter;
