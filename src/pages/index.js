import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import SEO from '../components/seo'

import Hero from '../components/Hero'
import Features from '../components/Features/Features'
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
      <StyledFeatures />
      <Card fluid={data.file.childImageSharp.fluid}>Meble Łazienkowe</Card>
      <Card fluid={data.file.childImageSharp.fluid}>Meble Łazienkowe</Card>
    </>
  )
}

export const card1 = graphql`
  query card1 {
    file(relativePath: { eq: "card1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
