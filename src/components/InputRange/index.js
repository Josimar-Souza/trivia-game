import React from 'react';
import PropTypes from 'prop-types';
import InputRangeStyle from './inputRangeStyle';

const InputRange = ({ min, max, defaultValue, onChange, name }) => {
	return (
		<InputRangeStyle
			type='range'
			min={ min }
			max={ max }
			defaultValue={ defaultValue }
			onChange={ onChange }
			name={ name }
		/>
	);
};

InputRange.defaultProps = {
	defaultValue: 5,
	name: ''
}

InputRange.propTypes = {
	min: PropTypes.number.isRequired,
	max: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
	defaultValue: PropTypes.number,
	name: PropTypes.string
};

export default InputRange;
