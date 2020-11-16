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
`
const StyledNavLink = styled(Link)`
  display: block;
  margin-bottom: 2px;
  text-decoration: none;
  color: #838383;
  transition: color 0.3s ease;
  &:hover {
    color: #333333;
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
  background-color: #838383;
  transition: transform 0.3s ease;
  transform: ${({ active }) => !active && `translateX(-100%)`};
`

const NavItem = ({ to, activePath, children }) => (
  <Item>
    <StyledNavLink to={to}>{children}</StyledNavLink>
    <Underline active={to === activePath ? true : false} />
  </Item>
)

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  activePath: PropTypes.string,
  children: PropTypes.any,
}

NavItem.defaultProps = {
  activePath: '',
  children: null,
}

export default NavItem
