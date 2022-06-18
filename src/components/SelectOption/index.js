import React from 'react';
import PropTypes from 'prop-types';
import SelectOptionContainer from './selectOptionStyles';

const SelectOption = ({ value, name }) => {
	return (
		<SelectOptionContainer
			value={ value }
		>
			{ name }
		</SelectOptionContainer>
	);
};

SelectOption.propTypes = {
	value: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
};

export default SelectOption;
