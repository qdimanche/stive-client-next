import React from 'react';

function Spinner(props) {
	return (
		<div className={'flex justify-center py-14'}>
			<span className={'loader'}></span>
		</div>
	);
}

export default Spinner;