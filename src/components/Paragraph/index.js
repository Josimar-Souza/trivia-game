import React from 'react';
import PropTypes from 'prop-types';
import ParagraphStyle from './paragraphStyles';

const Paragraph = ({ paragraph }) => {
	return (
		<ParagraphStyle>{ paragraph }</ParagraphStyle>
	);
};

Paragraph.propTypes = {
	paragraph: PropTypes.string.isRequired
};

export default Paragraph;
