import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import SEO from '../components/seo'

import Hero from '../components/Hero'
import Features, { StyledFeatureItem } from '../components/Features/Features'

import Card from '../components/Card'

const StyledFeatures = styled(Features)`
  width: 100%;
  margin: 100px 0;
`

const IndexPage = ({ data }) => {
  return (
    <>
      <SEO />
      <Hero fluid={data.hero.heroImage.fluid} />
      <StyledFeatures>
        <StyledFeatureItem fluid={data.features.feature1Image.fluid}>
          {data.features.feature1Name}
        </StyledFeatureItem>
        <StyledFeatureItem fluid={data.features.feature2Image.fluid}>
          {data.features.feature2Name}
        </StyledFeatureItem>
        <StyledFeatureItem fluid={data.features.feature3Image.fluid}>
          {data.features.feature3Name}
        </StyledFeatureItem>
      </StyledFeatures>
      {data.cards.edges.map(item => (
        <Card fluid={item.node.serviceImage.fluid}>
          {item.node.serviceName}
        </Card>
      ))}
    </>
  )
}

export const query = graphql`
  query index {
    hero: datoCmsGeneral {
      heroImage {
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }

    features: datoCmsFeature {
      feature1Name
      feature2Name
      feature3Name
      feature1Image {
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      feature2Image {
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      feature3Image {
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }

    cards: allDatoCmsService {
      edges {
        node {
          serviceName
          serviceImage {
            fluid {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage
