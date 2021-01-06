import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
`
const StyledTextarea = styled.textarea`
  position: relative;
  border: none;
  outline: none;
  resize: none;
  background-color: transparent;
  z-index: 10;
  padding: 19px 10px 4px;
  width: 100%;
  min-height: 10em;
`

const StyledLabel = styled.label`
  position: absolute;
  left: 11px;
  top: 19px;
  color: ${({ theme }) => theme.colorTertiary};
  font-size: 1.2em;
  transition: transform 0.2s ease, font-size 0.2s ease;
  ${StyledTextarea}:focus + &, ${StyledTextarea}:not(:placeholder-shown) + & {
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
      <StyledTextarea
        type={type}
        name={name}
        id={name}
        placeholder=" "
        autocomplete="off"
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
