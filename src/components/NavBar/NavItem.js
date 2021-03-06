import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Item = styled.li`
  display: inline-block;
  margin-left: 40px;
  margin-bottom: -5px;
  overflow: hidden;
  position: relative;
  @media screen and (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    margin: 0;
    padding: 30px 0;
    width: 100%;
    text-align: center;
    transition: background-color 0.5s ease-in-out;
    background-color: ${({ active, theme }) =>
      active ? theme.bgColorPrimary : null};
    font-size: 1.2em;
  }
`
const StyledNavLink = styled(Link)`
  display: block;
  margin-bottom: 2px;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
  &:hover ~ div {
    transform: translateX(0%);
  }
`
const Underline = styled.div`
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 3px;
  background-color: ${({ theme }) => theme.colorTertiary};
  transition: transform 0.3s ease-in-out;
  transform: ${({ active }) => !active && `translateX(-101%)`};
  @media screen and (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    display: none;
  }
`

const NavItem = ({ to, activePath, children }) => {
  const re = RegExp(`${to}`)
  const isActive = re.test(activePath)

  return (
    <Item active={isActive}>
      <StyledNavLink to={to}>{children}</StyledNavLink>
      <Underline active={isActive} />
    </Item>
  )
}

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  activePath: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
}

NavItem.defaultProps = {
  activePath: '',
  children: null,
}

export default NavItem
