import React from 'react';
import clsx from "clsx";
import PropTypes from "prop-types";

const Button = (props, text) => {

	const {variant} = props;

	return (<div>
			<button onClick={props.onClick}>
				<div
					className={clsx(`duration-300 px-3 md:px-6 transition py-2 rounded-[10px] border-[1px] w-fit`,
						variant === "black" && "border-black ",
						variant === "blackFill" && "bg-black text-white")}>
					{props.text}
				</div>
			</button>
		</div> 

	);
};


Button.propTypes = {
	children: PropTypes.node,
	onClick: PropTypes.func,
	variant: PropTypes.oneOf(['white', 'default', 'black', 'red'])
};

export default Button;
