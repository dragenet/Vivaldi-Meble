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

export const StyledFeatureItem = styled(FeatureItem)`
  @media screen and (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    margin-bottom: 25px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`

const Features = ({ className, children }) => (
  <Wrapper className={className}>{children}</Wrapper>
)

Features.propTypes = {
  className: PropTypes.string,
  childre: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
}

Features.defaultProps = {
  className: null,
  children: null,
}
export default Features
