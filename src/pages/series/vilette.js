import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { RowCenter, RowSpaceBetweenCenter } from "../../configs/display"

const VilettePage = () => {
  const dataVilette = useStaticQuery(graphql`
    query Vilette {
      allFile(
        filter: { sourceInstanceName: { eq: "vilette" } }
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

  const arrayOfImage = dataVilette?.allFile?.edges

  console.log(arrayOfImage)

  return (
    <Layout>
      <SEO title="Parc de la vilette" />

      <StyledImage
        fluid={arrayOfImage[14].node.childImageSharp.fluid}
        imgStyle={{ objectFit: "contain" }}
        height={"600px"}
      />
      <StyledRowSpaceBetweenCenter>
        <StyledImage
          fluid={arrayOfImage[13].node.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          height={"350px"}
        />
        <StyledImage
          fluid={arrayOfImage[12].node.childImageSharp.fluid}
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
          fluid={arrayOfImage[11].node.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          height={"350px"}
        />
        <StyledImage
          fluid={arrayOfImage[9].node.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          height={"350px"}
        />
      </StyledRowSpaceBetweenCenter>
      <StyledRowSpaceBetweenCenter>
        <StyledImage
          fluid={arrayOfImage[1].node.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          height={"350px"}
        />

        <StyledImage
          fluid={arrayOfImage[0].node.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          height={"350px"}
        />
      </StyledRowSpaceBetweenCenter>
      {/* Children's section */}
      <StyledImage
        fluid={arrayOfImage[6].node.childImageSharp.fluid}
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
          fluid={arrayOfImage[7].node.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          height={"350px"}
        />
      </StyledRowSpaceBetweenCenter>
      <StyledRowSpaceBetweenCenter>
        <StyledImage
          fluid={arrayOfImage[5].node.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          height={"350px"}
        />
        <StyledImage
          fluid={arrayOfImage[4].node.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          height={"350px"}
        />
      </StyledRowSpaceBetweenCenter>

      <StyledRowSpaceBetweenCenter>
        <StyledImage
          fluid={arrayOfImage[3].node.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          height={"350px"}
        />
      </StyledRowSpaceBetweenCenter>
    </Layout>
  )
}

export default VilettePage

const StyledRowSpaceBetweenCenter = styled(RowSpaceBetweenCenter)``

const StyledImage = styled(Img)`
  height: 100%;
  width: 100%;
  height: ${({ height }) => height};
  margin: 10px;
`
