import React from 'react'
import PropTypes from 'prop-types'
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

const Button = styled(FormButton)`
  width: 100px;
  margin: auto;
`

const ContactForm = ({ onSuccessful }) => {
  const validate = values => {
    values.phone = values.phone.replace(/\s/g, '')
    let errors = {}

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
      // console.log(values)
      fetch('/.netlify/functions/contactform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
        .then(res => {
          console.log(res)
          if (res.status !== 200 && res.status !== 400 && res.status !== 401)
            throw Error(res)

          return res.json()
        })
        .then(data => {
          if (data.status !== 'successful') {
            formik.setErrors(data.errors)
          } else {
            onSuccessful()
          }
        })
        .catch(err =>
          formik.setErrors({ submit: 'Przepraszamy. Spróbuj ponownie później' })
        )
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
        Zapoznałem się z{' '}
        <a href="/polityka-prywatnosci" target="_blank">
          polityką prywatności
        </a>
        {' i '}
        <a href="/rodo" target="_blank">
          informacją o przetwarzaniu danych osobowych
        </a>
      </FormCheckbox>
      <ErrorMessage>{formik.errors.acceptPrivacyPolicy}</ErrorMessage>

      <ReCAPTCHA
        sitekey={process.env.GATSBY_RECAPTCHA_SITE_KEY}
        onChange={onCaptchaResolve}
      />
      <ErrorMessage>{formik.errors.recaptcha}</ErrorMessage>

      <Button type="submit">Wyślij</Button>
      <ErrorMessage asterisk={false}>{formik.errors.submit}</ErrorMessage>
    </StyledForm>
  )
}

ContactForm.propTypes = {
  onSuccessful: PropTypes.func,
}

ContactForm.defaultProps = {
  onSuccessful: null,
}

export default ContactForm
