import React from 'react'
import styled from 'styled-components'
import { useFormik } from 'formik'
import ReCAPTCHA from 'react-google-recaptcha'

import FormInput from './FormInput'
import FormTextarea from './FormTextarea'
import FormCheckbox from './FormCheckbox'
import FormButton from './FormButton'
import ErrorMessage from './FormErrorMessage'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  & > *:not(:first-child) {
    margin-top: 10px;
  }
`
const ErrorMsg = styled.div`
  color: red;
  font-size: 0.7em;
  margin: 4px 13px !important;
  visibility: ${({ visible }) => visible};
`
const Button = styled(FormButton)`
  width: 100px;
  margin: auto;
`

const ContactForm = () => {
  const validate = values => {
    values.phone = values.phone.replace(/\s/g, '')
    const errors = {}

    if (!values.name) {
      errors.name = 'To pole jest wymagane'
    }

    if (!values.email) {
      errors.email = 'To pole jest wymagane'
    } else if (!/\w+@\w+\.\w+/.test(values.email)) {
      errors.email = 'Podany email nie jest poprawny'
    }
    if (!values.phone) {
      errors.phone = 'To pole jest wymagane'
    } else if (!/^\+?[0-9]{6,16}$/.test(values.phone)) {
      errors.phone = 'Podany numer jest nieprawidłowy'
    }
    if (!values.message) {
      errors.message = 'To pole jest wymagane'
    }

    if (!values.acceptPrivacyPolicy) {
      errors.acceptPrivacyPolicy = 'To pole jest wymagane'
    }

    if (!values.recaptcha) {
      errors.recaptcha = 'To pole jest wymagane'
    }

    return errors
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      acceptPrivacyPolicy: false,
      recaptcha: null,
    },
    onSubmit: values => {
      console.log(values)
    },
    validate,
  })

  const onCaptchaResolve = val => {
    formik.setFieldValue('recaptcha', val)
  }

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <FormInput
        name="name"
        autocomplete="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      >
        Imię i nazwisko
      </FormInput>
      <ErrorMessage>{formik.errors.name}</ErrorMessage>

      <FormInput
        name="email"
        type="email"
        autocomplete="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      >
        Email
      </FormInput>
      <ErrorMessage>{formik.errors.email}</ErrorMessage>

      <FormInput
        name="phone"
        type="tel"
        autocomplete="tel"
        onChange={formik.handleChange}
        value={formik.values.phone}
      >
        Telefon
      </FormInput>
      <ErrorMessage>{formik.errors.phone}</ErrorMessage>

      <FormTextarea
        name="message"
        onChange={formik.handleChange}
        value={formik.values.message}
      >
        Wiadomość
      </FormTextarea>
      <ErrorMessage>{formik.errors.message}</ErrorMessage>

      <FormCheckbox
        name="acceptPrivacyPolicy"
        onChange={formik.handleChange}
        state={formik.values.acceptPrivacyPolicy}
      >
        Zapoznałem się z informacją o administratorze i przetwarzaniu danych
      </FormCheckbox>
      <ErrorMessage>{formik.errors.acceptPrivacyPolicy}</ErrorMessage>

      <ReCAPTCHA
        sitekey={process.env.GATSBY_RECAPTCHA_SITE_KEY}
        onChange={onCaptchaResolve}
      />
      <ErrorMessage>{formik.errors.recaptcha}</ErrorMessage>
      <Button type="submit">Wyślij</Button>
    </StyledForm>
  )
}

export default ContactForm
