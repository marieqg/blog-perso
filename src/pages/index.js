import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql, Link } from "gatsby"
import _get from "lodash/get"
import { LinkDarkCentered } from "../components/utils/Text"
import GalerieDisplayContainer from "../components/common/GalerieDisplayContainer"

const IndexPage = () => {
  const images = useStaticQuery(graphql`
    query MyQuery {
      instagram: allInstagramContent(limit: 3) {
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
      NZNI: file(name: { eq: "NZNI" }) {
        childImageSharp {
          fluid(maxWidth: 350, quality: 100, grayscale: true) {
            ...GatsbyImageSharpFluid
          }
        }
      }

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

  let arrayOfInstaImages = _get(images, "instagram.edges", [])

  return (
    <Layout>
      <SEO title="Home" />
      <Link to="/voyages" style={{ textDecoration: "none" }}>
        <ContainerGalerie>
          <GalerieDisplayContainer
            country="Nouvelle Zélande - Ile du Nord"
            year="2020"
            link={"voyages/nouvelle-zelande/ile-du-nord"}
            image={images?.NZNI?.childImageSharp?.fluid}
          />
        </ContainerGalerie>
      </Link>

      <Link to="/series" style={{ textDecoration: "none", marginTop: "10px" }}>
        <LinkDarkCentered to="/series">Séries photographiques</LinkDarkCentered>
        <Container>
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
        </Container>
      </Link>
      <Link to="/projet-365" style={{ textDecoration: "none" }}>
        <LinkDarkCentered to="/projet-365">Projet 365</LinkDarkCentered>
        <Container>
          {arrayOfInstaImages.map((item, i) => {
            return (
              <div key={i} style={{ width: "200px", height: "200px" }}>
                {item?.node?.localImage?.childImageSharp && (
                  <Img fixed={item.node.localImage.childImageSharp.fixed} />
                )}
              </div>
            )
          })}
        </Container>
      </Link>
    </Layout>
  )
}

export default IndexPage

const Container = styled.div`
  height: 100%;
  margin: auto;
  marginbottom: 1.45rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 1.45rem;
  display: flex;
  justify-content: center;
`
const ContainerGalerie = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`
