import React from "react"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { useStaticQuery, graphql } from "gatsby"
import _get from "lodash/get";
import { H2DarkCentered, TextDarkCentered } from "../components/utils/Text"


const Projet365page = () => {
    const data = useStaticQuery(graphql`
  query InstagramQueryAll {
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

}`)

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

    return (
        <Layout>
            <SEO title="Projet 365" />

            <H2DarkCentered>Projet 365 - Novembre 2020/2021</H2DarkCentered>
            <TextDarkCentered>Une photo, tous les jours, sans filtre et sans fioriture ...</TextDarkCentered>
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


export default Projet365page
