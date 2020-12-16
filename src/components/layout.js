import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { useWindowSize } from "../components/utils/UseWindowSize"

import Header from "./header"
import "./layout.css"
import { Footer, FooterLink } from "./utils/Text"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const size = useWindowSize()
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        size={size}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main
          onClick={() => {
            menuOpen && setMenuOpen(false)
          }}
        >
          {children}
        </main>
        <Footer>
          {" "}
          <FooterLink href="http://www.mariequittelier.com/mentions-legales">
            Mentions Légales
          </FooterLink>{" "}
          - © {new Date().getFullYear()}, Made with ❤️ by{" "}
          <FooterLink href="http://www.bloomingandco.com/">
            Blooming & Co.
          </FooterLink>
        </Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
