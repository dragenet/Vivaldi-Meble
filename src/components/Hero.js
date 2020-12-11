import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

const Wrapper = styled.div`
  display: inline-grid;
  direction: rtl;
  grid-template-columns: repeat(2, 1fr);
  height: calc(100vh - 70px);
  width: 100%;
  @media screen and (min-width: 1250px) {
    grid-template-columns: 2fr 3fr;
  }
  @media screen and (max-width: ${({ theme }) => theme.mobileBreakPoint}) {
    position: relative;
    display: block;
  }
`

const InnerWrapper = styled.div`
  display: flex;
  direction: ltr;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  @media screen and (max-width: ${({ theme }) => theme.mobileBreakPoint}) {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
`

const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 450px;
  background-color: ${({ theme }) => theme.bgColorPrimary};
  @media screen and (max-width: ${({ theme }) => theme.mobileBreakPoint}) {
    height: 60%;
  }
`

const Text = styled.div`
  text-transform: uppercase;
  font-size: 30px;
  font-weight: ${({ theme }) => theme.fontNormal};
  color: #626262;
  margin: 0 15%;

  &:nth-child(1) {
    font-weight: ${({ theme }) => theme.fontBold};
    font-size: 50px;
    color: #3e3e3e;
  }
  &:nth-child(2) {
    align-self: center;
  }
  &:nth-child(3) {
    align-self: flex-end;
  }
  @media screen and (max-width: ${({ theme }) => theme.mobileBreakPoint}) {
    margin: 0 10%;
  }
`

const StyledImage = styled(Image)`
  height: 100%;
  width: 100%;
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
      <StyledImage fluid={heroImage.file.childImageSharp.fluid} />
      <InnerWrapper>
        <TextWrapper>
          <Text>Meble</Text>
          <Text>Na każdą</Text>
          <Text>Porę Roku</Text>
        </TextWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Hero
