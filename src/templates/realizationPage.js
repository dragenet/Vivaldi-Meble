import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Gallery from '../components/Gallery'

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
const StyledGallery = styled(Gallery)`
  margin: 0 auto;
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

      <StyledGallery images={data.datoCmsRealization.imageGallery} />
    </Wrapper>
  )
}

RealizationPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query realizationQuery($slug: String!) {
    datoCmsRealization(slug: { eq: $slug }) {
      title
      description
      imageGallery {
        fixed(width: 300) {
          ...GatsbyDatoCmsFixed_tracedSVG
        }
        originalId
      }
    }
  }
`

export default RealizationPage
