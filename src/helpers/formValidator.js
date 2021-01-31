const validator = values => {
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

export default validator
