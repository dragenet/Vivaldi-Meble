import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

import Logo from '../../assets/svg/Logo_striped.svg'
import NavItem from './NavItem'

const StyledNavbar = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 70px;
  display: flex;
  align-items: center;
  background-color: #fafafa;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
`

const StyledHeader = styled.header`
  position: relative;
  width: 100%;
  margin-left: 31px;
  display: inline-flex;
  align-items: baseline;
`

const StyledNav = styled.ul`
  list-style: none;
`

const Socials = styled.div`
  margin-left: auto;
  margin-right: 20px;
`

const StyledSocialLink = styled.a.attrs(() => ({
  target: '__blank',
}))`
  display: inline-block;
  margin-right: 15px;
  color: inherit;
  transition: color 0.3s ease;
  &:hover {
    color: #333333;
  }
`

const NavBar = ({ activePath }) => {
  return (
    <>
      <StyledNavbar>
        <StyledHeader>
          <Link to="/">
            <Logo />
          </Link>
          <StyledNav>
            <NavItem to="/realizacje" activePath={activePath}>
              realizacje
            </NavItem>
            <NavItem to="/kontakt" activePath={activePath}>
              kontakt
            </NavItem>
          </StyledNav>
          <Socials>
            <StyledSocialLink href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faFacebookF} />
            </StyledSocialLink>
            <StyledSocialLink href="https://www.instagram.com/">
              <FontAwesomeIcon icon={faInstagram} />
            </StyledSocialLink>
          </Socials>
        </StyledHeader>
      </StyledNavbar>
    </>
  )
}

NavBar.propTypes = {
  activePath: PropTypes.string.isRequired,
}

export default NavBar
