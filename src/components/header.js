import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from './Logo'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#e56b6f`,
      marginBottom: `1.5rem`,
      padding: `0.5rem 0 0.5rem 0`,


    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        display: 'flex',
        alignItems: 'center',

      }}
    >
      <Logo />
      <h1 style={{ margin: 0, paddingLeft: "20px" }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
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
