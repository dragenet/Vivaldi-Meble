import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
`

const StyledButton = styled.button`
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 1.25em;
  padding: 8px;
`

const Underline = styled.div`
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 3px;
  background-color: ${({ theme }) => theme.colorTertiary};
`

const FormButton = ({ name, type, children, className }) => (
  <Wrapper className={className}>
    <StyledButton id={name} name={name} type={type}>
      {children}
    </StyledButton>
    <Underline />
  </Wrapper>
)

FormButton.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.string,
  className: PropTypes.string,
}

FormButton.defaultProps = {
  name: '',
  type: 'submit',
  children: '',
  className: '',
}

export default FormButton
