import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Mansonry from 'react-masonry-component'
import Image from 'gatsby-image'

const Wrapper = styled.div`
  width: 80%;
  margin: 40px auto;
`

const HeaderWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`

const StyledHeader = styled.h2`
  display: inline-block;
  margin-left: 20px;
`

const StyledP = styled.p`
  margin-bottom: 36px;
`
const StyledMansonry = styled(Mansonry)`
  margin: 0 auto;

`

const StyledImage = styled(Image)`
  margin: 10px;
  
`

const RealizationPage = ({ data }) => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Link to="/realizacje">
          <FontAwesomeIcon icon={faArrowLeft} size="2x" />
        </Link>
        <StyledHeader>{data.datoCmsRealization.title}</StyledHeader>
      </HeaderWrapper>

      <StyledP
        dangerouslySetInnerHTML={{
          __html: data.datoCmsRealization.description,
        }}
      ></StyledP>

      <StyledMansonry options={{isFitWidth: true}}>
        {data.datoCmsRealization.imageGallery.map((image) => (
          <StyledImage key={image.fixed.src} fixed={image.fixed} />
        ))}
      </StyledMansonry>
    </Wrapper>
  )
}

RealizationPage.propTypes = {}

export const query = graphql`
  query realizationQuery($slug: String!) {
    datoCmsRealization(slug: { eq: $slug }) {
      title
      description
      imageGallery {
        fixed(width: 300) {
          ...GatsbyDatoCmsFixed_tracedSVG
        }
      }
    }
  }
`

export default RealizationPage
