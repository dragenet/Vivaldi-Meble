import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import CheckboxIcon from '../../assets/svg/Checkbox.svg'

const Wrapper = styled.div`
  position: relative;
  display: flex;
`

const StyledInput = styled.input`
  position: relative;
  margin-top: 0;
  z-index: 10;
  opacity: 0;
  transform: scale(1.5);
`

const StyledLabel = styled.label`
  color: ${({ theme }) => theme.colorTertiary};
  font-size: 0.8em;
  margin-left: 0.4em;
`

const Checkbox = styled(CheckboxIcon)`
  position: absolute;
  top: 0;
  left: 4px;
  width: 13px;
  height: 13px;

  #tick {
    transform: scale(${({ checked }) => (checked ? 1 : 0)});
    /* transition: transform 0.1s ease; */
  }
`

const FormInput = ({ name, children, state, onChange, ...props }) => {
  const [checked, setChecked] = useState(state)
  return (
    <Wrapper>
      <StyledInput
        type="checkbox"
        name={name}
        id={name}
        checked={checked}
        value={state}
        onChange={e => {
          setChecked(!checked)
          onChange(e)
        }}
        autocomplete="off"
        {...props}
      />
      <StyledLabel htmlFor={name}>{children}</StyledLabel>
      <Checkbox checked={checked} />
    </Wrapper>
  )
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  state: PropTypes.bool,
}

FormInput.defaultProps = {
  children: '',
  state: false,
}

export default FormInput
