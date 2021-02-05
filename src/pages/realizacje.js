import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import ImageGrid from '../components/ImageGrid'
import RealizationCard, { Title } from '../components/RealizationCard'

const Realizacje = ({ data }) => {
  return (
    <ImageGrid gap="20px">
      {data.allDatoCmsRealization.nodes.map(node => (
        <RealizationCard
          key={node.slug}
          image={node.heroImage.fluid}
          link={node.slug}
        >
          <Title>{node.title}</Title>
        </RealizationCard>
      ))}
    </ImageGrid>
  )
}

Realizacje.propTypes = {}

Realizacje.defaultProps = {}

export const query = graphql`
  query getRealizationsQuery {
    allDatoCmsRealization {
      nodes {
        title
        slug
        heroImage {
          fluid {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  }
`

export default Realizacje
