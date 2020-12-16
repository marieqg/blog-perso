import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

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

    return (
        <Layout>
            <SEO title="Projet 365" />

            <H2DarkCentered>Projet 365 - Novembre 2020/2021</H2DarkCentered>
            <TextDarkCentered>Une photo, tous les jours, sans filtre et sans fioriture ...</TextDarkCentered>
            <Container>
                {arrayOfInstaImages.map((item, i) => {
                    return (
                        <div key={i} style={{ width: "200px", height: "200px", margin: "20px" }}>
                            <Img fixed={item.node.localImage.childImageSharp.fixed} />
                        </div>)
                })}
            </Container>
        </Layout>)
}


export default Projet365page

const Container = styled.div`
height: 100%; 
max-width: 80%;
margin:auto; 
marginBottom: 1.45rem;
display: flex; justify-content: center; align-items: center; 
flex-direction: row;
flex-wrap: wrap;

`;
