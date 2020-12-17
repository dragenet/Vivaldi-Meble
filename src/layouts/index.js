/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ThemeProvider from '../Theme/ThemeProvider'

import GlobalStyle from '../Theme/globalStyle'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer'

const MainWrapper = styled.div`
  width: ${({ vw }) => `${vw}px`};
`

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
  const [vw, setVw] = useState(getVw)
  const handleResize = () => setVw(getVw)

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <ThemeProvider>
      <MainWrapper vw={vw}>
        <GlobalStyle />
        <NavBar activePath={path} />
        <StyledWrapper>
          <main>{children}</main>
          <StyledFooter />
        </StyledWrapper>
      </MainWrapper>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
}

export default Layout
