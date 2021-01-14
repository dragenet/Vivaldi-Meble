import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const FormErrorMessage = ({ children, asterisk }) => {
  const ErrorMsg = styled.div`
    color: red;
    font-size: 0.7em;
    margin: 4px 13px 0 !important;
    visibility: ${({ visible }) => visible};
  `

  const visible = children === '' ? 'hidden' : 'visible'
  return (
    <ErrorMsg visible={visible}>
      {asterisk ? '*' : ''}
      {children}
    </ErrorMsg>
  )
}

FormErrorMessage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  asterisk: PropTypes.bool,
}

FormErrorMessage.defaultProps = {
  children: '',
  asterisk: true,
}

export default FormErrorMessage
