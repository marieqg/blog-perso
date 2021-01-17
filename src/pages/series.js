import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GalerieDisplayContainer from "../components/common/GalerieDisplayContainer"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"

const SeriesPage = () => {
  const images = useStaticQuery(graphql`
    query {
      vilette: file(name: { eq: "Villette-09" }) {
        childImageSharp {
          fluid(maxWidth: 650, quality: 100, grayscale: true) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blanchisserie: file(name: { eq: "Blanchisserie-19" }) {
        childImageSharp {
          fluid(maxWidth: 650, quality: 100, grayscale: true) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      philarmonique: file(name: { eq: "Philarmonique-19" }) {
        childImageSharp {
          fluid(maxWidth: 650, quality: 100, grayscale: true) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Séries" />
      <ContainerGalerie>
        <GalerieDisplayContainer
          country="Parc de la Vilette"
          year="2019"
          link={"vilette"}
          image={images?.vilette?.childImageSharp?.fluid}
        />
        <GalerieDisplayContainer
          country="Philarmonique de Paris"
          year="2019"
          link={"philarmonique-paris"}
          image={images?.philarmonique?.childImageSharp?.fluid}
        />
        <GalerieDisplayContainer
          country="Blanchisserie de chauny"
          year="2019"
          link={"blanchisserie-chauny"}
          image={images?.blanchisserie?.childImageSharp?.fluid}
        />
      </ContainerGalerie>
    </Layout>
  )
}

export default SeriesPage

const ContainerGalerie = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`
