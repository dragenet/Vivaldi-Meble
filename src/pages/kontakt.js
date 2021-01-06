import React from 'react'
import styled from 'styled-components'

import ContactData from '../components/ContactData'
import ContactForm from '../components/ContactForm/ContactForm'

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 130px);
  display: flex;
  @media screen and (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    flex-direction: column;
    justify-content: space-around;
  }
`

const InnerWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    width: 100%;
  }
`

const kontakt = () => {
  const dummyData = {
    name: 'John Doe',
    nip: '00000000',
    phone: '+12 123 456 78',
    email: 'mebleviavaldipl@gmail.com',
    addr1: 'ul. Pistacjowa 39,',
    addr2: '39-045 Kraków',
  }
  return (
    <Wrapper>
      <InnerWrapper>
        <ContactData data={dummyData} />
      </InnerWrapper>

      <InnerWrapper>
        <ContactForm />
      </InnerWrapper>
    </Wrapper>
  )
}

export default kontakt
