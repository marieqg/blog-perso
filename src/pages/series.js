import React from "react"
import { Construction } from "../components/common/Construction"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GalerieDisplayContainer from "../components/common/GalerieDisplayContainer"
import styled from "styled-components"

const SeriesPage = () => (
  <Layout>
    <SEO title="Séries" />
    <ContainerGalerie>
      <GalerieDisplayContainer
        country="Parc de la Vilette"
        year="2019"
        link={"vilette"}
      />
    </ContainerGalerie>
  </Layout>
)

export default SeriesPage

const ContainerGalerie = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`
