/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ThemeProvider from '../Theme/ThemeProvider'

import GlobalStyle from '../assets/globalStyle'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer'

const StyledWrapper = styled.div`
  position: absolute;
  top: 70px;
  min-height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
`
const StyledFooter = styled(Footer)`
  margin-top: auto;
`

const Layout = ({ children, path }) => (
  <ThemeProvider>
    <GlobalStyle />
    <NavBar activePath={path} />
    <StyledWrapper>
      <main>{children}</main>
      <StyledFooter />
    </StyledWrapper>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
}

export default Layout
