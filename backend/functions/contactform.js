const fetch = require('node-fetch').default
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const validateBody = body => {
  let errors = {}

  if (!body.name) {
    errors.name = 'To pole jest wymagane'
  }

  if (!body.email) {
    errors.email = 'To pole jest wymagane'
  } else if (!/\w+@\w+\.\w+/.test(body.email)) {
    errors.email = 'Podany email nie jest poprawny'
  }
  if (!body.phone) {
    errors.phone = 'To pole jest wymagane'
  } else if (!/^\+?[0-9]{6,16}$/.test(body.phone)) {
    errors.phone = 'Podany numer jest nieprawidłowy'
  }
  if (!body.message) {
    errors.message = 'To pole jest wymagane'
  }

  if (!body.acceptPrivacyPolicy) {
    errors.acceptPrivacyPolicy = 'To pole jest wymagane'
  }

  if (!body.recaptcha) {
    errors.recaptcha = 'To pole jest wymagane'
  }

  return errors
}

const verifyRecaptcha = async (secret, response) => {
  var recaptcha = {
    secret,
    response,
  }

  let recaptchaBody = []
  for (var i in recaptcha) {
    let encodedKey = encodeURIComponent(i)
    let encodedValue = encodeURIComponent(recaptcha[i])
    recaptchaBody.push(encodedKey + '=' + encodedValue)
  }
  recaptchaBody = recaptchaBody.join('&')

  return fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: recaptchaBody,
  }).then(res => {
    if (!res.ok) throw Error(res)
    return res.json()
  })
}

const isEmpty = obj => {
  return Object.keys(obj).length === 0 && obj.constructor === Object
}

const onSuccessful = async ({ name, email, phone, message }, e) => {
  const privacyPolicyFingerprint = `${e.headers['user-agent']} from ${e.headers['client-ip']}`

  const msg = {
    to: process.env.FORM_EMAIL,
    from: 'ViValdi MEBLE <noreply@meblevivaldi.pl>',
    templateId: process.env.SENDGRID_TEMPLATE_INTERNAL,
    dynamicTemplateData: {
      name,
      email,
      phone,
      message,
      privacyPolicyFingerprint,
      subject: `Nowe zapytanie od ${name}`,
    },
  }
  console.log(msg)
  return await sgMail
    .send(msg)
    .then(() => {
      console.log('msg send')
      msg.to = email
      msg.templateId = process.env.SENDGRID_TEMPLATE_CUSTOMER
      msg.subject = 'Twoje zapytanie jest przetwarzane'
      sgMail.send(msg)
      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'successful' }),
      }
    })
    .catch(e => {
      console.log('SendGrid')
      console.log(e)
      return {
        statusCode: 500,
      }
    })
}

exports.handler = async (e, context) => {
  const jbody = JSON.parse(e.body)

  const errors = validateBody(jbody)

  if (!isEmpty(errors)) {
    return {
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: 'validation_error', errors: errors }),
    }
  }

  return await verifyRecaptcha(
    process.env.RECAPTCHA_PRIVATE_KEY,
    jbody.recaptcha
  )
    .then(data => {
      if (data.success === true) {
        return onSuccessful(jbody, e)
      } else {
        errors.recaptcha = 'Weryfikacja nie powiodła się, spróbuj jeszcze raz'
        return {
          statusCode: 401,
          body: JSON.stringify({
            status: 'recaptcha_verification_error',
            errors: errors,
          }),
        }
      }
    })
    .catch(err => {
      console.log('Captcha error')
      console.log(err)
      return {
        statusCode: 500,
      }
    })
}
