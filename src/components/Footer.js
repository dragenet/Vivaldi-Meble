import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledWrapper = styled.footer`
  height: ${({ theme }) => theme.footerHeight};
  width: 100%;
  background-color: ${({ theme }) => theme.bgColorPrimary};
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    height: 90px;
    flex-direction: column;
  }
`

const InnerWrapper = styled.small`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    align-items: center;
  }
`

const Footer = ({ className }) => {
  const [year, setYear] = useState(null)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <StyledWrapper className={className}>
      <InnerWrapper>
        <div>
          {/* <small> */}
          Copyright &copy; {year} ViValdi MEBLE. All Rights Reserved.&nbsp;
          {/* </small> */}
        </div>
        <div>
          {/* <small> */}
          Created by{' '}
          <a href="http://dragenet.pl/" target="__blank">
            Dragenet
          </a>
          .{/* </small> */}
        </div>
      </InnerWrapper>
      <div>
        <InnerWrapper>
          <Link to="/polityka-prywatnosci">Polityka prywatności</Link>
          <Link to="/rodo">Informacja o przetwarzaniu</Link>
        </InnerWrapper>
      </div>
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
