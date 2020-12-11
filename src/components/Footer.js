import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledWrapper = styled.footer`
  height: 60px;
  width: 100%;
  background-color: ${({ theme }) => theme.bgColorPrimary};
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    flex-direction: column;
    & > span:nth-last-child(1) {
      margin-top: 3px;
    }
  }
`

const Footer = ({ className }) => {
  const [year, setYear] = useState(null)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <StyledWrapper className={className}>
      <span>
        <small>
          Copyright &copy; {year} ViValdi MEBLE. All Rights Reserved.&nbsp;
        </small>
      </span>
      <span>
        <small>
          Created by{' '}
          <a href="http://dragenet.pl/" target="__blank">
            Dragenet
          </a>
          .
        </small>
      </span>
    </StyledWrapper>
  )
}

Footer.propTypes = {
  className: PropTypes.string,
}
Footer.defaultProps = {
  className: null,
}

export default Footer
