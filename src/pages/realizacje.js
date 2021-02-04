import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import ImageGrid from '../components/ImageGrid'
import RealizationCard, { Title } from '../components/RealizationCard'

const Realizacje = ({ data }) => {
  return (
    <ImageGrid gap="20px">
      <RealizationCard
        image={data.file.childImageSharp.fluid}
        link="/realizacje/kuchnia"
      >
        <Title>Kuchnia Jarosława z Zadupowic Mniejszych Duchownych</Title>
      </RealizationCard>
    </ImageGrid>
  )
}

Realizacje.propTypes = {}

Realizacje.defaultProps = {}

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "card1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default Realizacje
