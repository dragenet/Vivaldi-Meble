import React from 'react'
import styled from 'styled-components'

const StyledName = styled.h3`
  font-size: 28px;
`

const ContactData = ({ data: { name, nip, phone, email, addr1, addr2 } }) => {
  return (
    <div>
      <StyledName>{name}</StyledName>
      <p>NIP: {nip}</p>
      <p>Telefon: {phone}</p>
      <p>E-mail: {email}</p>
      <p>{addr1}</p>
      <p>{addr2}</p>
    </div>
  )
}

export default ContactData
