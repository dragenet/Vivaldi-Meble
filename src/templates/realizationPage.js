import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

const RealizationPage = ({ data }) => {
  return (
    <div>
      <h2>{data.datoCmsRealization.title}</h2>
    </div>
  )
}

RealizationPage.propTypes = {}

export const query = graphql`
  query realizationQuery($slug: String!) {
    datoCmsRealization(slug: { eq: $slug }) {
      title
    }
  }
`

export default RealizationPage
