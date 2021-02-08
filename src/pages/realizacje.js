import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import ImageGrid from '../components/ImageGrid'
import RealizationCard, { Title } from '../components/RealizationCard'

const StyledImageGrid = styled(ImageGrid)`
  margin: 40px auto;
`

const Realizacje = ({ data }) => {
  return (
    <StyledImageGrid gap="30px">
      {data.allDatoCmsRealization.nodes.map(node => (
        <RealizationCard
          key={node.slug}
          image={node.heroImage.fluid}
          link={node.slug}
        >
          <Title>{node.title}</Title>
        </RealizationCard>
      ))}
    </StyledImageGrid>
  )
}

Realizacje.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query getRealizationsQuery {
    allDatoCmsRealization(
      sort: { fields: meta___firstPublishedAt, order: DESC }
    ) {
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
