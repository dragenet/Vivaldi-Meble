import React from 'react'

import Policy, { StyledH2 } from '../components/Policy'

const rodo = ({ data }) => (
  <>
    <Policy>
      {/* <StyledH2>Polityka Cookies</StyledH2> */}
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
