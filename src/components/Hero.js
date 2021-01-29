import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

const Wrapper = styled.div`
  display: inline-grid;
  direction: rtl;
  grid-template-columns: repeat(2, 1fr);
  height: ${({ theme }) => `calc(100vh - ${theme.navbarHeight})`};
  width: 100%;
  @media screen and (min-width: ${({ theme }) => theme.heroBreakpoint}) {
    grid-template-columns: 3fr 2fr;
  }
  @media screen and (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
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
  @media screen and (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
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
  @media screen and (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
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
  @media screen and (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    margin: 0 10%;
  }
`

const StyledImage = styled(Image)`
  height: 100%;
  width: 100%;
`

const Hero = ({ fluid }) => (
  <Wrapper>
    <StyledImage fluid={fluid} />
    <InnerWrapper>
      <TextWrapper>
        <Text>Meble</Text>
        <Text>Na każdą</Text>
        <Text>Porę Roku</Text>
      </TextWrapper>
    </InnerWrapper>
  </Wrapper>
)

export default Hero
