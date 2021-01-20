import React from 'react'

import Policy, { StyledH2 } from '../components/Policy'

const cookiesPolicy = ({ data }) => (
  <>
    <Policy>
      <StyledH2>Polityka Cookies</StyledH2>
      <div
        dangerouslySetInnerHTML={{
          __html: data.html.cookiesPolicy,
        }}
      ></div>
    </Policy>
  </>
)

export const query = graphql`
  query cookiesPolicy {
    html: datoCmsGeneral {
      cookiesPolicy
    }
  }
`

export default cookiesPolicy
