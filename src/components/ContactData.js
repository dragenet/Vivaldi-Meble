import React from 'react'
import styled from 'styled-components'

const StyledName = styled.h3`
  font-size: 28px;
`

const ContactData = ({
  data: { name, nip, phone, email, address1, address2 },
}) => {
  return (
    <div>
      <StyledName>{name}</StyledName>
      <p>NIP: {nip}</p>
      <p>Telefon: {phone}</p>
      <p>E-mail: {email}</p>
      <p>{address1}</p>
      <p>{address2}</p>
    </div>
  )
}

export default ContactData
