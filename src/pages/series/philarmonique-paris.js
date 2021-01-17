import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import {
  CenterMiddleColumn,
  RowCenter,
  RowSpaceBetweenCenter,
} from "../../configs/display"

const PhilarmoniquePage = () => {
  const dataPhilarmonique = useStaticQuery(graphql`
    query Philarmonique {
      allFile(
        filter: { sourceInstanceName: { eq: "philarmonique" } }
        sort: { fields: name, order: ASC }
      ) {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth: 650, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const arrayOfImage = dataPhilarmonique?.allFile?.edges
  console.log(arrayOfImage)
  return (
    <Layout>
      <CenterMiddleColumn>
        <SEO title="Philarmonique de Paris " />

        <StyledImage
          fluid={arrayOfImage[0].node.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          height={"600px"}
        />
        <StyledRowSpaceBetweenCenter>
          <StyledImage
            fluid={arrayOfImage[17].node.childImageSharp.fluid}
            imgStyle={{ objectFit: "contain" }}
            height={"350px"}
          />
          <StyledImage
            fluid={arrayOfImage[16].node.childImageSharp.fluid}
            imgStyle={{ objectFit: "contain" }}
            height={"350px"}
          />
        </StyledRowSpaceBetweenCenter>
        <StyledImage
          fluid={arrayOfImage[1].node.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          height={"600px"}
        />

        <StyledRowSpaceBetweenCenter>
          <StyledImage
            fluid={arrayOfImage[2].node.childImageSharp.fluid}
            imgStyle={{ objectFit: "contain" }}
            height={"350px"}
          />
          <StyledImage
            fluid={arrayOfImage[3].node.childImageSharp.fluid}
            imgStyle={{ objectFit: "contain" }}
            height={"350px"}
          />
        </StyledRowSpaceBetweenCenter>
        <StyledRowSpaceBetweenCenter>
          <StyledImage
            fluid={arrayOfImage[4].node.childImageSharp.fluid}
            imgStyle={{ objectFit: "contain" }}
            height={"350px"}
          />

          <StyledImage
            fluid={arrayOfImage[5].node.childImageSharp.fluid}
            imgStyle={{ objectFit: "contain" }}
            height={"350px"}
          />
        </StyledRowSpaceBetweenCenter>
        <StyledImage
          fluid={arrayOfImage[7].node.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          height={"600px"}
        />
        <StyledRowSpaceBetweenCenter>
          <StyledImage
            fluid={arrayOfImage[8].node.childImageSharp.fluid}
            imgStyle={{ objectFit: "contain" }}
            height={"350px"}
          />
          <StyledImage
            fluid={arrayOfImage[9].node.childImageSharp.fluid}
            imgStyle={{ objectFit: "contain" }}
            height={"350px"}
          />
        </StyledRowSpaceBetweenCenter>

        <StyledImage
          fluid={arrayOfImage[13].node.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          height={"600px"}
        />
        <StyledRowSpaceBetweenCenter>
          <StyledImage
            fluid={arrayOfImage[11].node.childImageSharp.fluid}
            imgStyle={{ objectFit: "contain" }}
            height={"350px"}
          />
          <StyledImage
            fluid={arrayOfImage[13].node.childImageSharp.fluid}
            imgStyle={{ objectFit: "contain" }}
            height={"350px"}
          />
        </StyledRowSpaceBetweenCenter>

        <StyledImage
          fluid={arrayOfImage[10].node.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          height={"600px"}
        />
        <StyledRowSpaceBetweenCenter>
          <StyledImage
            fluid={arrayOfImage[15].node.childImageSharp.fluid}
            imgStyle={{ objectFit: "contain" }}
            height={"350px"}
          />
          <StyledImage
            fluid={arrayOfImage[14].node.childImageSharp.fluid}
            imgStyle={{ objectFit: "contain" }}
            height={"350px"}
          />
        </StyledRowSpaceBetweenCenter>
      </CenterMiddleColumn>
    </Layout>
  )
}

export default PhilarmoniquePage

const StyledRowSpaceBetweenCenter = styled(RowSpaceBetweenCenter)``

const StyledImage = styled(Img)`
  width: 100%;
  margin-top: 10px;
  @media (min-width: 768px) {
    margin: 10px;
    height: ${({ height }) => height};
  }
`
