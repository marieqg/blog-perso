import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import colors from '../../configs/ColorConfig';

const GalerieDisplayContainer = ({ link, image, year, country }) => {
	return (
		<Link to={link} style={{ textDecoration: 'none' }}>
			<Container>
				<TextContainer>
					{year && <Year>{year}</Year>}
					{country && <Country>{country}</Country>}
				</TextContainer>
				{image && <Img fluid={image} />}{' '}
			</Container>
		</Link>
	);
};

GalerieDisplayContainer.propTypes = {};

export default GalerieDisplayContainer;

const Container = styled.div`
	height: 400px;
	max-width: 350px;
	margin: 20px;
`;

const TextContainer = styled.div`
	background-color: ${colors.grey};
	height: 100px;
`;

const Year = styled.p`
	color: ${colors.greydark2};
	font-size: 20px;
	font-weight: 300;
	text-align: center;
	line-height: 20px;
	padding: 20px 0;
	margin: 0;
`;

const Country = styled.p`
	color: ${colors.greydark2};
	font-size: 20px;
	font-weight: 600;
	text-align: center;
	line-height: 20px;
`;
