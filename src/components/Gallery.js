import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Image from 'gatsby-image'
import Mansonry from 'react-masonry-component'

const clickHandler = setStateFn => index => () => {
  setStateFn(index)
  console.log(index)
}

const ImageWrapper = styled.div`
  margin: 10px;
  cursor: pointer;
`

const Gallery = ({ className, images }) => {
  const [currentImage, setCurrentImage] = useState(null)

  const imageHandler = clickHandler(setCurrentImage)

  return (
    <>
      <Mansonry className={className} options={{ isFitWidth: true }}>
        {images.map((image, index) => (
          <ImageWrapper key={image.originalId} onClick={imageHandler(index)}>
            <Image fixed={image.fixed} />
          </ImageWrapper>
        ))}
      </Mansonry>
    </>
  )
}

Gallery.propTypes = {
  className: PropTypes.string,
  images: PropTypes.array.isRequired,
}

Gallery.defaultProps = {
  className: '',
}

export default Gallery
