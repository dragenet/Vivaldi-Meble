import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
`
const StyledInput = styled.input`
  position: relative;
  border: none;
  outline: none;
  background-color: transparent;
  z-index: 10;
  padding: 19px 10px 4px;
`

const StyledLabel = styled.label`
  position: absolute;
  left: 11px;
  bottom: 4px;
  color: ${({ theme }) => theme.colorTertiary};
  font-size: 1.2em;
  transition: transform 0.2s ease, font-size 0.2s ease;
  ${StyledInput}:focus + &, ${StyledInput}:not(:placeholder-shown) + & {
    transform: translate(-11px, -20px);
    font-size: 0.9em;
  }
`

const Underline = styled.div`
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 3px;
  background-color: ${({ theme }) => theme.colorTertiary};
`

const FormInput = ({ name, children, type, ...props }) => {
  return (
    <Wrapper>
      <StyledInput
        type={type}
        name={name}
        id={name}
        placeholder=" "
        {...props}
      />
      <StyledLabel htmlFor={name}>{children}</StyledLabel>
      <Underline />
    </Wrapper>
  )
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  type: PropTypes.string,
}

FormInput.defaultProps = {
  children: '',
  type: 'text',
}

export default FormInput
