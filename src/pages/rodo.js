import React from 'react'

import SEO from '../components/seo'
import Policy from '../components/Policy'

const rodo = ({ data }) => (
  <>
    <SEO title="RODO" />
    <Policy>
      <div
        dangerouslySetInnerHTML={{
          __html: data.html.rodoPolicy,
        }}
      ></div>
    </Policy>
  </>
)

export const query = graphql`
  query rodoPolicy {
    html: datoCmsGeneral {
      rodoPolicy
    }
  }
`

export default rodo
