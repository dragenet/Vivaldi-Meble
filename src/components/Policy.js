import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 140px);
  display: flex;
  align-items: center;
  justify-content: center;
`

const InnerWrapper = styled.div`
  width: 50%;
  align-items: center;
  justify-content: center;
`

export const StyledH2 = styled.h2`
  text-align: center;
`

const Policy = ({ children }) => (
  <Wrapper>
    <InnerWrapper>{children}</InnerWrapper>
  </Wrapper>
)

Policy.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
}

Policy.defaultProps = {
  children: null,
}
export default Policy
