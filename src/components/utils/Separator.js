import React from "react"
import styled from 'styled-components';
import PropTypes from 'prop-types';

export function Separator(props) {
	return <StyledSeparator width={props.width} height={props.height} margin={props.margin} color={props.color} />;
}

const StyledSeparator = styled.div`
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	background-color: ${({ color }) => color};
	margin: ${({ margin }) => margin};
`;

Separator.propTypes = {
	heigth: PropTypes.string,
	width: PropTypes.string,
	margin: PropTypes.string,
	color: PropTypes.string
};

Separator.defaultProps = {
	height: '1px',
	width: '1px',
	margin: '10px',
	color: 'grey'
};
