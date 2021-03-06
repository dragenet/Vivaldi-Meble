/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import ThemeProvider from '../Theme/ThemeProvider'

import GlobalStyle from '../Theme/globalStyle'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer'
import CookiesAlert from '../components/CookiesAlert'
import Button from '../components/ContactForm/FormButton'

const StyledWrapper = styled.div`
  position: absolute;
  top: 70px;
  min-height: ${({ theme }) => `calc(100vh - ${theme.navbarHeight})`};
  width: 100%;
  display: flex;
  flex-direction: column;
`
const StyledFooter = styled(Footer)`
  margin-top: auto;
`

const StyledCookiesAlert = styled(CookiesAlert)`
  position: fixed;
  left: 0;
  bottom: 0;
  @media screen and (max-width: ${({ theme }) => theme.cookieAlertBreakpoint}) {
    flex-direction: column;
  }
`

const StyledButton = styled(Button)`
  width: auto;
  margin-left: 20px;
  transform: scale(0.85);
`

const StyledSmall = styled.small`
  text-align: center;
`

const Layout = ({ children, path }) => {
  const [cookiesAccepted, setCookiesAccepted] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('cookiesAccepted') === 'true')
      setCookiesAccepted(true)
  }, [])

  const handleCookies = () => {
    setCookiesAccepted(true)
    sessionStorage.setItem('cookiesAccepted', true)
  }

  const socials = useStaticQuery(graphql`
    query query {
      datoCmsGeneral {
        facebook
        instagram
      }
    }
  `)

  return (
    <ThemeProvider>
      <GlobalStyle />
      <NavBar
        activePath={path}
        facebook={socials.datoCmsGeneral.facebook}
        instagram={socials.datoCmsGeneral.instagram}
      />
      <StyledWrapper>
        <main>{children}</main>

        <StyledFooter />

        {cookiesAccepted ? null : (
          <StyledCookiesAlert>
            <StyledSmall>
              Ta strona wykorzystuje pliki cookies. Przeglądając ją wyrażasz
              zgogę na{' '}
              <a href="/polityka-prywatnosci" target="_blank">
                politykę prywatności
              </a>
              .
            </StyledSmall>
            <StyledButton type="button" onClick={handleCookies}>
              Akceptuję
            </StyledButton>
          </StyledCookiesAlert>
        )}
      </StyledWrapper>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
}

export default Layout
