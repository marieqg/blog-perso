import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import {
  RowCenter,
  RowSpaceBetweenCenter,
  CenterMiddleColumn,
} from "../../configs/display"

const BlanchisseriePage = () => {
  const dataBlanchisserie = useStaticQuery(graphql`
    query Blanchisserie {
      allFile(
        filter: { sourceInstanceName: { eq: "blanchisserie" } }
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

  const arrayOfImage = dataBlanchisserie?.allFile?.edges
  console.log(arrayOfImage)
  return (
    <Layout>
      <CenterMiddleColumn>
        <SEO title="Blanchisserie de chauny" />

        <StyledImage
          fluid={arrayOfImage[19].node.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          height={"600px"}
        />
        <StyledRowSpaceBetweenCenter>
          <StyledImage
            fluid={arrayOfImage[1].node.childImageSharp.fluid}
            imgStyle={{ objectFit: "contain" }}
            height={"350px"}
          />
          <StyledImage
            fluid={arrayOfImage[2].node.childImageSharp.fluid}
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
          <StyledImage
            fluid={arrayOfImage[13].node.childImageSharp.fluid}
            imgStyle={{ objectFit: "contain" }}
            height={"350px"}
          />
        </StyledRowSpaceBetweenCenter>

        <StyledImage
          fluid={arrayOfImage[12].node.childImageSharp.fluid}
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
            fluid={arrayOfImage[18].node.childImageSharp.fluid}
            imgStyle={{ objectFit: "contain" }}
            height={"350px"}
          />
        </StyledRowSpaceBetweenCenter>
        <StyledImage
          fluid={arrayOfImage[23].node.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          height={"600px"}
        />

        <StyledRowSpaceBetweenCenter>
          <StyledImage
            fluid={arrayOfImage[20].node.childImageSharp.fluid}
            imgStyle={{ objectFit: "contain" }}
            height={"350px"}
          />
          <StyledImage
            fluid={arrayOfImage[21].node.childImageSharp.fluid}
            imgStyle={{ objectFit: "contain" }}
            height={"350px"}
          />
        </StyledRowSpaceBetweenCenter>

        <StyledImage
          fluid={arrayOfImage[22].node.childImageSharp.fluid}
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
            fluid={arrayOfImage[5].node.childImageSharp.fluid}
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
            fluid={arrayOfImage[7].node.childImageSharp.fluid}
            imgStyle={{ objectFit: "contain" }}
            height={"350px"}
          />
        </StyledRowSpaceBetweenCenter>
        {/* <StyledRowSpaceBetweenCenter>
        <StyledImage
          fluid={arrayOfImage[6].node.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          height={"350px"}
        />
      <StyledImage
          fluid={arrayOfImage[25].node.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          height={"350px"}
        /> 
      </StyledRowSpaceBetweenCenter> */}
        <StyledImage
          fluid={arrayOfImage[16].node.childImageSharp.fluid}
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

        <StyledRowSpaceBetweenCenter>
          <StyledImage
            fluid={arrayOfImage[10].node.childImageSharp.fluid}
            imgStyle={{ objectFit: "contain" }}
            height={"350px"}
          />
          <StyledImage
            fluid={arrayOfImage[11].node.childImageSharp.fluid}
            imgStyle={{ objectFit: "contain" }}
            height={"350px"}
          />
        </StyledRowSpaceBetweenCenter>
        <StyledImage
          fluid={arrayOfImage[0].node.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          height={"600px"}
        />
      </CenterMiddleColumn>
    </Layout>
  )
}

export default BlanchisseriePage

const StyledRowSpaceBetweenCenter = styled(RowSpaceBetweenCenter)``

const StyledImage = styled(Img)`
  width: 100%;
  margin-top: 10px;
  @media (min-width: 768px) {
    margin: 10px;
    height: ${({ height }) => height};
  }
`
