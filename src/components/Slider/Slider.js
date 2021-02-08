import React, { useState, useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Image from 'gatsby-image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngleLeft,
  faAngleRight,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'

import {
  actions,
  currentImageTranslate,
  useClickHandler,
  useCurrentImageReducer,
  useOnTouch,
} from './helpers'

const Wrapper = styled.div`
  position: fixed;
  z-index: 1000; // overlay navbar
  left: 0;
  top: 0;
  min-width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.95);
  display: inline-flex;
  align-items: center;
`

const InnerWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  transform: ${({ index }) => currentImageTranslate(index)};
  transition: transform 0.3s ease;
`

const ImageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
`

const StyledImage = styled(Image)`
  height: 100%;
  width: 100%;
`

const SideColiders = styled.div`
  position: fixed;
  height: 100vw;
  width: 20vw;
`
const LeftColid = styled(SideColiders)`
  left: 0;
`
const RightColid = styled(SideColiders)`
  right: 0;
`

const Buttons = styled.button`
  position: fixed;
  z-index: 10;
  width: 72px;
  height: 72px;
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.bgColorSliderNavs};
  opacity: ${({ active }) => (active ? 1 : 0)};
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`

const LeftButton = styled(Buttons)`
  left: 0;

  @media (hover: hover) {
    ${LeftColid}:hover ~ & {
      opacity: 1;
    }
  }
`
const RightButton = styled(Buttons)`
  right: 0;

  @media (hover: hover) {
    ${RightColid}:hover ~ & {
      opacity: 1;
    }
  }
`

const CloseButton = styled(Buttons)`
  top: 0;
  right: 0;
  @media (hover: hover) {
    ${RightColid}:hover ~ & {
      opacity: 1;
    }
  }
`

const StyledIcon = styled(FontAwesomeIcon).attrs(({ size }) => ({
  size: size ? size : '3x',
}))`
  color: white;
`

const Slider = ({ images, index, callback }) => {
  const [showNavs, setShowNavs] = useState(false)
  const [currentImage, dispatchCurrentImage] = useReducer(
    useCurrentImageReducer(images.length),
    index
  )

  const clickHandler = useClickHandler(
    currentImage,
    dispatchCurrentImage,
    callback
  )

  const [touchStartHandler, touchEndHandler] = useOnTouch(setShowNavs, 3000)

  useEffect(() => {
    window.addEventListener('touchstart', touchStartHandler, false)
    window.addEventListener('touchend', touchEndHandler, false)
    return () => {
      window.removeEventListener('touchstart', touchStartHandler)
      window.removeEventListener('touchend', touchEndHandler, false)
    }
  }, [])

  return (
    <>
      <Wrapper>
        <InnerWrapper index={currentImage}>
          {images.map(image => (
            <ImageWrapper key={image.originalId}>
              <StyledImage
                fluid={image.fluid}
                imgStyle={{ objectFit: 'contain' }}
              />
            </ImageWrapper>
          ))}
        </InnerWrapper>

        <LeftColid />
        <LeftButton onClick={clickHandler(actions.prev)} active={showNavs}>
          <StyledIcon icon={faAngleLeft} />
        </LeftButton>

        <RightColid />
        <RightButton onClick={clickHandler(actions.next)} active={showNavs}>
          <StyledIcon icon={faAngleRight} />
        </RightButton>

        <CloseButton onClick={clickHandler(actions.close)} active={showNavs}>
          <StyledIcon icon={faTimes} size="2x" />
        </CloseButton>
      </Wrapper>
    </>
  )
}

Slider.propTypes = {
  images: PropTypes.array.isRequired,
  index: PropTypes.number,
  callback: PropTypes.func,
}

Slider.defaultProps = {
  index: null,
  callback: null,
}

export default Slider
