
import { Typography } from '../Typography';
import styled from "styled-components"
import { Link } from 'gatsby';


export const H2DarkCentered = styled.h2`
  ${Typography['H2 / Dark / Centered']}
`;
export const LinkDarkCentered = styled(Link)`
  ${Typography['H2 / Dark / Centered']};
  text-decoration: none;
  display: flex;
  justify-content: center; 
  margin: 40px 0 20px 0px
`;



export const TextDarkCentered = styled.p`
  ${Typography['Text / Reg / BlackOlive / Centered']}
`;


export const Footer = styled.footer`
  ${Typography['Text / Reg / Dark / Centered']},
  marginTop: 2rem
`;
export const FooterLink = styled.a`
  ${Typography['Link / Dark']},
`;


