import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Typography } from './Typography';



const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.5rem`,
      padding: `2rem 0 0 0`,
      height: "100%"
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingBottom: `2rem`,
        marginBottom: '2rem',
        borderBottom: `2px solid rgba(81,88,187, 0.3)`
      }}
    >
      <LinkMainPage
        to="/"
      >
        {siteTitle}
      </LinkMainPage>
      <div >


        <LinkMenu
          to="/voyages">
          Voyages
</LinkMenu>
        <LinkMenu
          to="/series">
          Séries
</LinkMenu>
        <LinkMenu
          to="/projet-365">
          Projet 365
</LinkMenu>

      </div>
    </div>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header


const LinkMenu = styled(Link)`
${Typography['Text / Reg / Dark / Centered']};
text-decoration: underline;
padding:  0 20px;
`;
const LinkMainPage = styled(Link)`
text-decoration: none;
${Typography['H2 / Dark / Centered']};
padding:  0 20px;

`;

