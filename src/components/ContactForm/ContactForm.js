import React from 'react'
import styled from 'styled-components'

import FormInput from './FormInput'
import FormTextarea from './FormTextarea'
import FormCheckbox from './FormCheckbox'
import FormButton from './FormButton'

const StyledForm = styled.form`
  width: 50%;
  & > *:not(:first-child) {
    margin-top: 25px;
  }
`

const Button = styled(FormButton)`
  width: 100px;
  margin: auto;
`

const ErrorMsg = styled.div`
  color: red;
  font-size: 0.7em;
  margin: 4px 13px !important;
`

const ContactForm = () => {
  return (
    <StyledForm>
      <FormInput name="name" autocomplete="name">
        Imię i nazwisko
      </FormInput>
      <ErrorMsg>Błąd</ErrorMsg>
      <FormInput name="name" type="email" autocomplete="email">
        Email
      </FormInput>
      <FormInput name="number" type="number" autocomplete="tel">
        Telefon
      </FormInput>
      <FormTextarea name="message">Wiadomość</FormTextarea>
      <FormCheckbox
        name="privacy_policy"
        onChange={() => console.log('changed')}
      >
        Zapoznałem się z informacją o administratorze i przetwarzaniu danych
      </FormCheckbox>
      <Button type="submit">Wyślij</Button>
    </StyledForm>
  )
}

export default ContactForm
