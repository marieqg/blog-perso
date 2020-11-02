
import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"



const GalerieDisplayContainer = ({ link, image }) => {
  return (
    <Link to={link}>
      <Container>
        <Img fixed={image}></Img>
      </Container>
    </Link>
  )
}

GalerieDisplayContainer.propTypes = {
}

export default GalerieDisplayContainer



const Container = styled.div`
height: 300px; 
max-width: 400px;
margin: 20px
`;
