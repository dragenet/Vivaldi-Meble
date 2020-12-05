import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

const Wrapper = styled.div`
  height: calc(100vh - 70px);
  width: 100%;
`

const InnerWrapper = styled.div`
  display: inline-block;
  height: 100%;
  width: 45%;
`

const StyledImage = styled(Image)`
  display: inline-block;
  height: 100%;
  width: 55%;
`

const Hero = () => {
  const heroImage = useStaticQuery(
    graphql`
      query heroImage {
        file(relativePath: { eq: "hero.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )
  return (
    <Wrapper>
      <InnerWrapper>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </InnerWrapper>
      <StyledImage fluid={heroImage.file.childImageSharp.fluid} />
    </Wrapper>
  )
}

export default Hero
