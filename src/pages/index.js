import React from "react"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { useStaticQuery, graphql } from "gatsby"
import _get from "lodash/get";
import { H2DarkCentered, TextDarkCentered } from "../components/utils/Text"
import GalerieDisplayContainer from "../components/common/GalerieDisplayContainer"



const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query InstagramQuery {
    allInstagramContent {
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
          fixed(width: 400, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
}
`)
  console.log(data)
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
      <H2DarkCentered>Galerie</H2DarkCentered>
      <GalerieDisplayContainer link={"/nouvelle-zelande/ile-du-nord"} image={NZNI.childImageSharp.fixed}></GalerieDisplayContainer>

      <H2DarkCentered>Projet Daily Pick</H2DarkCentered>
      <TextDarkCentered>Une photo, tous les jours, sans filtres et sans fioritures ...</TextDarkCentered>
      <div style={{ maxWidth: `900px`, marginBottom: `1.45rem`, display: 'flex' }}>
        {arrayOfInstaImages.map((item, i) => {
          return (
            <div key={i} style={{ width: "200px", height: "200px" }}>
              <Img fixed={item.node.localImage.childImageSharp.fixed} />
            </div>)
        })}
      </div>

    </Layout>)
}


export default IndexPage


