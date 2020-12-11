import React from 'react'
import styled from 'styled-components'

import SEO from '../components/seo'

import Hero from '../components/Hero'
import Features from '../components/Features/Features'

const StyledFeatures = styled(Features)`
  width: 100%;
  margin: 100px 0;
`

const IndexPage = () => {
  return (
    <>
      <SEO />
      <Hero />
      <StyledFeatures />
    </>
  )
}

export default IndexPage
