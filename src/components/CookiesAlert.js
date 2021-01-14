import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  opacity: 0.85;
  padding: 15px 0;
  background-color: ${({ theme }) => theme.bgColorMenu};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`

const CookiesAlert = ({ className, children }) => {
  return <Wrapper className={className}>{children}</Wrapper>
}

CookiesAlert.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
}

CookiesAlert.defaultProps = {
  className: '',
  children: null,
}

export default CookiesAlert
