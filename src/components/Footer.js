import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledWrapper = styled.footer`
  height: 60px;
  width: 100vw;
  background-color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    & > span:nth-last-child(1) {
      margin-top: 3px;
    }
  }
`

const Footer = ({ className }) => (
  <StyledWrapper className={className}>
    <span>&copy; Copyright by ViValdi Meble.&nbsp;</span>
    <span>Created by Dragenet.</span>
  </StyledWrapper>
)

Footer.propTypes = {
  className: PropTypes.string,
}
Footer.defaultProps = {
  className: null,
}

export default Footer
