import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import SEO from '../components/seo'

import Hero from '../components/Hero'
import Features, {StyledFeatureItem} from '../components/Features/Features'

import Card from '../components/Card'



const StyledFeatures = styled(Features)`
  width: 100%;
  margin: 100px 0;
`

const IndexPage = ({ data }) => {
  return (
    <>
      <SEO />
      <Hero />
      <StyledFeatures>
      <StyledFeatureItem fluid={data.feature.childImageSharp.fluid}>
        Feature 1
      </StyledFeatureItem>
      <StyledFeatureItem fluid={data.feature.childImageSharp.fluid}>
        Feature 2
      </StyledFeatureItem>
      <StyledFeatureItem fluid={data.feature.childImageSharp.fluid}>
        Feature 3
      </StyledFeatureItem>
      </StyledFeatures>
      <Card fluid={data.card.childImageSharp.fluid}>Meble Łazienkowe</Card>
      <Card fluid={data.card.childImageSharp.fluid}>Meble Łazienkowe</Card>
    </>
  )
}

export const card1 = graphql`
  query card1 {
    card: file(relativePath: { eq: "card1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    feature: file(relativePath: { eq: "feature1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
