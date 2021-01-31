const fetchForm = values =>
  new Promise((resolve, reject) => {
    fetch('/.netlify/functions/contactform', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then(res => {
      if (res.status !== 200 && res.status !== 400 && res.status !== 401)
        reject(Error(res))

      resolve(res.json())
    })
  })

export default fetchForm
