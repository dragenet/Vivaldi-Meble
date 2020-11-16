/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import GlobalStyle from '../assets/globalStyle'
import NavBar from '../components/NavBar/NavBar'

const StyledMain = styled.main`
  position: absolute;
  top: 70px;
`

const Layout = ({ children, path }) => (
  <>
    <GlobalStyle />
    <NavBar activePath={path} />
    <StyledMain>{children}</StyledMain>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
}

export default Layout
