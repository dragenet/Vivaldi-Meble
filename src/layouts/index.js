/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ThemeProvider from '../Theme/ThemeProvider'

import GlobalStyle from '../Theme/globalStyle'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer'

const StyledWrapper = styled.div`
  position: absolute;
  top: 70px;
  min-height: calc(100vh - 70px);
  width: 100%;
  display: flex;
  flex-direction: column;
`
const StyledFooter = styled(Footer)`
  margin-top: auto;
`

const getVw = () => document.documentElement.clientWidth

const Layout = ({ children, path }) => {
  const mainWrapper = useRef(null)

  const handleResize = () => {
    mainWrapper.current.width = getVw()
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <ThemeProvider>
      <div ref={mainWrapper}>
        <GlobalStyle />
        <NavBar activePath={path} />
        <StyledWrapper>
          <main>{children}</main>
          <StyledFooter />
        </StyledWrapper>
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
}

export default Layout
