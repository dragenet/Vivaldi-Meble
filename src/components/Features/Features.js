import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { graphql, useStaticQuery } from 'gatsby'

import FeatureItem from './FeatureItem'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    justify-content: space-evenly;
    flex-direction: column;
  }
`

const StyledFeatureItem = styled(FeatureItem)`
  @media screen and (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    margin-bottom: 25px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`

const Features = ({ className }) => {
  const img = useStaticQuery(graphql`
    query featureImage {
      file(relativePath: { eq: "feature1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <Wrapper className={className}>
      <StyledFeatureItem fluid={img.file.childImageSharp.fluid}>
        Feature 1
      </StyledFeatureItem>
      <StyledFeatureItem fluid={img.file.childImageSharp.fluid}>
        Feature 2
      </StyledFeatureItem>
      <StyledFeatureItem fluid={img.file.childImageSharp.fluid}>
        Feature 3
      </StyledFeatureItem>
    </Wrapper>
  )
}

Features.propTypes = {
  className: PropTypes.string,
}

Features.defaultProps = {
  className: null,
}
export default Features
