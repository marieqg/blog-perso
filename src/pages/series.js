import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GalerieDisplayContainer from "../components/common/GalerieDisplayContainer"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"

const SeriesPage = () => {
  const seriesImage = useStaticQuery(graphql`
    query {
      file(name: { eq: "Villette-09" }) {
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
          image={seriesImage.file.childImageSharp.fluid}
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
