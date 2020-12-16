import React, { useState } from 'react';

import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Typography } from './Typography';
import { useWindowSize } from '../components/utils/UseWindowSize';
import { Separator } from '../components/utils/Separator';

import HamburgerMenu from '../assets/HamburgerMenu';

const Header = ({ siteTitle }) => {
	const size = useWindowSize();
	const [ menuOpen, setMenuOpen ] = useState(false);
	return (
		<StyledHeader>
			<StyledContainer>
				<LinkMainPage to="/">{siteTitle}</LinkMainPage>
				<div>
					{size.width > 600 ? (
						<div>
							<LinkMenu to="/voyages"> Voyages</LinkMenu>
							<LinkMenu to="/series"> Séries </LinkMenu>
							<LinkMenu to="/projet-365"> Projet 365 </LinkMenu>
						</div>
					) : (
						<ContainerHamburger onClick={() => setMenuOpen(!menuOpen)}>
							<HamburgerMenu />
						</ContainerHamburger>
					)}
				</div>
			</StyledContainer>
			<Menu menuOpen={menuOpen} onClick={() => setMenuOpen(false)}>
				<MenuContainer>
					<LinkMenuWithMargin to="/voyages">Voyages</LinkMenuWithMargin>
					<LinkMenuWithMargin to="/series">Séries</LinkMenuWithMargin>
					<LinkMenuWithMargin to="/projet-365">Projet 365</LinkMenuWithMargin>
				</MenuContainer>
			</Menu>
		</StyledHeader>
	);
};

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ``
};

export default Header;

const StyledHeader = styled.header`
	marginBottom: 1.5rem;
	padding: 2rem 0 0 0;
	height: 130px;
	position: sticky;
	top: 0px;
	z-index: 10;
	background: white;
`;

const StyledContainer = styled.div`
	max-width: 960;
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
	padding-bottom: 2rem;
	margin-bottom: 2rem;
	border-bottom: 2px solid rgba(81, 88, 187, 0.3);
`;

const LinkMenu = styled(Link)`
${Typography['Text / Reg / Dark / Centered']};
text-decoration: underline;
padding:  0 20px;
`;
const LinkMenuWithMargin = styled(LinkMenu)`
${Typography['Text / Reg / Dark / Centered']};
text-decoration: underline;
padding:  10 20px;

`;
const LinkMainPage = styled(Link)`
text-decoration: none;
${Typography['H2 / Dark / Centered']};
padding:  0 20px;
`;

const ContainerHamburger = styled.div`
	height: 20px;
	width: 20px;
	margin: auto 30px auto 0px;
`;
const MenuContainer = styled.div`
	display: flex;
	flex-direction: column;
	text-decoration: none;
`;

const Menu = styled.div`
	height: 200px;
	width: 200px;
	position: relative;
	right: -40%;
	top: -30px;
	z-index: 1000;
	transition: all 0.35s;
	cursor: pointer;
	visibility: ${({ menuOpen }) => (menuOpen ? 'visible' : 'hidden')};
	opacity: ${({ menuOpen }) => (menuOpen ? 1 : 0)};
	background: white;
	border-radius: 10px;
`;
