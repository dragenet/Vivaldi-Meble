import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

import Logo from '../../assets/svg/Logo_striped.svg'
import NavItem from './NavItem'
import Hamburger from './Hamburger'

const Wrapper = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.bgColorPrimary};
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
`

const StyledLogo = styled(Link)`
  position: relative;
  margin-left: 31px;
  height: 35px;
  display: inline-flex;
  align-items: baseline;
  @media screen and (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    margin-left: 14px;
    align-items: center;
  }
`

const MenuWrapper = styled.nav`
  display: inline-flex;
  height: 35px;
  position: relative;
  align-items: flex-end;
  width: 100%;
  @media screen and (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    position: fixed;
    background-color: ${({ theme }) => theme.bgColorMenu};
    padding-top: 73px;
    top: 70px;
    left: 100%;
    height: calc(100% - 70px);
    width: 100%;
    display: flex;
    flex-direction: column;
    transition: transform 1s ease;
    transform: ${({ active }) => active && `translate(-100%)`};
  } ;
`

const StyledNav = styled.ul`
  list-style: none;
  @media screen and (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
  } ;
`

const Socials = styled.div`
  margin-left: auto;
  margin-right: 20px;
  align-self: center;
  @media screen and (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    margin: auto 0 28px 0;
  }
`

const StyledSocialLink = styled.a.attrs(() => ({
  target: '__blank',
}))`
  display: inline-block;
  margin-right: 15px;
  text-decoration: none;
  @media screen and (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    margin-right: 40px;
    padding: 15px; /*made touch click easier*/
    &:last-child {
      margin-right: 0;
    }
    & > svg {
      font-size: 1.5em;
    }
  }
`

const NavBar = ({ activePath }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [lastPath, setLastPath] = useState(activePath)

  useEffect(() => {
    if (activePath !== lastPath) {
      setIsMenuOpen(false)
      setLastPath(activePath)
    }
  }, [activePath, lastPath])

  const handlePathChange = () => {
    setIsMenuOpen(false)
  }

  return (
    <Wrapper>
      <StyledLogo to="/">
        <Logo />
      </StyledLogo>

      <MenuWrapper active={isMenuOpen}>
        <StyledNav>
          {/* <NavItem
            to="/realizacje"
            activePath={activePath}
            onClick={handlePathChange}
          >
            realizacje
          </NavItem> */}
          <NavItem
            to="/kontakt"
            activePath={activePath}
            onClick={handlePathChange}
          >
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
      </MenuWrapper>
      <Hamburger
        active={isMenuOpen}
        onClick={() => {
          setIsMenuOpen(!isMenuOpen)
        }}
      />
    </Wrapper>
  )
}

NavBar.propTypes = {
  activePath: PropTypes.string.isRequired,
}

export default NavBar
