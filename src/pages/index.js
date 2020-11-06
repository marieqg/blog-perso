import React from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql, Link } from "gatsby"
import _get from "lodash/get";
import { LinkDarkCentered } from "../components/utils/Text"
import GalerieDisplayContainer from "../components/common/GalerieDisplayContainer"



const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query InstagramQuery {
    allInstagramContent (limit :3)  {
      edges {
        node {
          localImage {
            childImageSharp {
              fixed(width: 200, height: 200) {
                ...GatsbyImageSharpFixed
              }
          }
        }
      }
    }
  }
  allFile {
    edges {
      node {
        name
        childImageSharp {
          fixed(width: 350, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
}
`)
  let arrayOfInstaImages = _get(data, 'allInstagramContent.edges', [])
  let images = _get(data, 'allFile.edges', [])

  let getImage = (name) => {
    let result
    images.map(image => {
      if (image.node && image.node.name === name) {
        result = image.node
      }
    })
    return result
  }

  let NZNI = getImage("NZNI")

  return (
    <Layout>
      <SEO title="Home" />
      <Link to="/voyages" style={{ textDecoration: "none" }}>
        <GalerieDisplayContainer country="Nouvelle Zélande - Ile du Nord" year="2020" link={"/nouvelle-zelande/ile-du-nord"} image={NZNI.childImageSharp.fixed}></GalerieDisplayContainer>
      </Link >
      <Link to="/projet-365" style={{ textDecoration: "none" }}>
        <LinkDarkCentered to="/projet-365">Projet 365</LinkDarkCentered>
        <div style={{ maxWidth: `900px`, marginBottom: `1.45rem`, display: 'flex', justifyContent: 'center' }}>
          {arrayOfInstaImages.map((item, i) => {
            return (
              <div key={i} style={{ width: "200px", height: "200px" }}>
                <Img fixed={item.node.localImage.childImageSharp.fixed} />
              </div>)
          })}
        </div>
      </Link>

    </Layout>)
}


export default IndexPage


