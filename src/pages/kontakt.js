import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

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

const kontakt = ({ data }) => (
  <Wrapper>
    <InnerWrapper>
      <ContactData data={data.datoCmsContact} />
    </InnerWrapper>

    <InnerWrapper>
      <ContactForm />
    </InnerWrapper>
  </Wrapper>
)

export const query = graphql`
  query contact {
    datoCmsContact {
      name
      nip
      phone
      email
      address1
      address2
    }
  }
`

export default kontakt
