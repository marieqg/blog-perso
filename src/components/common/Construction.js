import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Typography } from "../Typography"
export function Construction(props) {
  return (
    <StyledConstruction>
      <StyledTitle>Page en construction ...</StyledTitle>{" "}
    </StyledConstruction>
  )
}

const StyledConstruction = styled.div`
  height: 600px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledTitle = styled.div`
  text-decoration: none;
  ${Typography["H2 / Dark / Centered"]};
  padding: 0 40px;
`
Construction.propTypes = {}

Construction.defaultProps = {}
