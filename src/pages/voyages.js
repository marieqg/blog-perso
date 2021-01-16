import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import _get from "lodash/get"
import GalerieDisplayContainer from "../components/common/GalerieDisplayContainer"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

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
      <ContainerGalerie>
        <GalerieDisplayContainer
          country="Nouvelle Zélande - Ile du Nord"
          year="2020"
          link={"nouvelle-zelande/ile-du-nord"}
          image={NZNI.childImageSharp.fluid}
        />

        <GalerieDisplayContainer
          country="Nouvelle Zélande - Ile du Sud"
          year="2020"
          link={"nouvelle-zelande/ile-du-nord"}
        />
        <GalerieDisplayContainer country="Laos" year="2018" link={"laos"} />
        <GalerieDisplayContainer
          country="Cambodge"
          year="2018"
          link={"cambodge"}
        />
        <GalerieDisplayContainer
          country="Thailande"
          year="2018"
          link={"thailande"}
        />
        <GalerieDisplayContainer
          country="Birmanie"
          year="2018"
          link={"birmanie"}
        />
      </ContainerGalerie>
    </Layout>
  )
}

export default VoyagesPage

const ContainerGalerie = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`
