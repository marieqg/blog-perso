import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import _get from "lodash/get"
import GalerieDisplayContainer from "../components/common/GalerieDisplayContainer"
import { useStaticQuery, graphql } from "gatsby"

const VoyagesPage = () => {
  const data = useStaticQuery(graphql`
    query allVoyagesImages {
      allFile {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  let images = _get(data, "allFile.edges", [])
  let getImage = name => {
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
      <SEO title="Voyages" />
      <GalerieDisplayContainer
        country="Nouvelle Zélande - Ile du Nord"
        year="2020"
        link={"/nouvelle-zelande/ile-du-nord"}
        image={NZNI.childImageSharp.fluid}
      ></GalerieDisplayContainer>
    </Layout>
  )
}

export default VoyagesPage
