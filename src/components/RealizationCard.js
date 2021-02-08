import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Image from 'gatsby-image'
import { Link } from 'gatsby'

const Wrapper = styled(Link)`
  position: relative;
  display: block;
  cursor: pointer;
  overflow: hidden;
  width: 100%;
  height: 250px;
  @media screen and (min-width: ${({ theme }) =>
      theme.imageGridBreakpoints.xs}) {
    width: 360px;
  }
`

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  & > picture > img {
    ${Wrapper}:hover & {
      filter: grayscale(50%);
    }

    @media (hover: none) {
      & {
        filter: grayscale(50%);
      }
    }
  }
`
const TitleWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  background-color: rgba(0, 0, 0, 0.8);
  height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (hover: hover) {
    transform: translateY(100%);

    ${Wrapper}:hover & {
      transform: translateY(0);
    }
  }
  transition: transform 0.2s ease-in-out;
`

const Title = styled.h4`
  z-index: 10;
  color: white;
  font-size: 1em;
  font-weight: ${({ theme }) => theme.fontNormal};
  text-transform: capitalize;
  text-align: center;
  opacity: 1;
`

const RealizationCard = ({ className, image, link, children }) => {
  return (
    <Wrapper to={link} className={className}>
      <StyledImage fluid={image} />
      <TitleWrapper>{children}</TitleWrapper>
    </Wrapper>
  )
}

RealizationCard.propTypes = {
  className: PropTypes.string,
}

RealizationCard.defaultProps = {
  className: '',
}

export default RealizationCard
export { Title }
