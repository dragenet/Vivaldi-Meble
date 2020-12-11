import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Image from 'gatsby-image'

const Wrapper = styled.div`
  display: block;
`

const StyledImage = styled(Image)`
  border-radius: 50%;
  width: 225px;
  height: 225px;

  @media screen and (max-width: ${({ theme }) => theme.featuresBreakpoint}) {
    width: 175px;
    height: 175px;
  }

  @media screen and (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    width: 250px;
    height: 250px;
  }
`

const Text = styled.div`
  width: 100%;
  font-size: 22px;
  color: ${({ theme }) => theme.colorPrimary};
  text-align: center;
  margin-top: 27px;

  @media screen and (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    font-size: 25px;
  }
`

const FeatureItem = ({ children, fluid, className }) => (
  <Wrapper className={className}>
    <StyledImage fluid={fluid} />
    <Text>{children}</Text>
  </Wrapper>
)

FeatureItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  fluid: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  className: PropTypes.string,
}

FeatureItem.defaultProps = {
  children: null,
  className: null,
}

export default FeatureItem
