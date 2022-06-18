import React from 'react';
import PropTypes from 'prop-types';
import InputRangeStyle from './inputRangeStyle';

const InputRange = ({ min, max }) => {
	return (
		<InputRangeStyle
			type='range'
			min={ min }
			max={ max }
		/>
	);
};

InputRange.propTypes = {
	min: PropTypes.number.isRequired,
	max: PropTypes.number.isRequired
};

export default InputRange;
