import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
  display: none;
  position: fixed;
  right: 22px;
  @media screen and (max-width: ${({ theme }) => theme.mobileBreakPoint}) {
    display: block;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    &:focus {
      & > div {
        box-shadow: 0 0 2px 2px #51a7e8;
      }
    }
  }
`

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 35px;
  height: 30px;
`

const Bars = styled.div`
  position: absolute;
  width: 35px;
  height: 3px;
  background-color: ${({ active, theme }) =>
    active ? 'transparent' : theme.hamburgerButtonColor};
  transition: opacity 0.3s ease;

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 35px;
    height: 3px;
    background-color: ${({ theme }) => theme.hamburgerButtonColor};
    opacity: 1 !important;
    /* transform-origin: 0 50%; */
    transition: transform 1s ease;
    transform-origin: 50% 50%;
  }
  &:before {
    top: -12px;
    transform: ${({ active }) => active && 'translateY(12px) rotate(-45deg)'};
  }
  &:after {
    bottom: -12px;
    transform: ${({ active }) => active && 'translateY(-12px) rotate(45deg)'};
  }
`

const Hamburger = ({ onClick, active }) => {
  return (
    <Wrapper onClick={onClick}>
      <InnerWrapper>
        <Bars active={active} />
      </InnerWrapper>
    </Wrapper>
  )
}

export default Hamburger
