import React from 'react'

import Policy, { StyledH2 } from '../components/Policy'

const privacyPolicy = ({ data }) => (
  <>
    <Policy>
      {/* <StyledH2>Polityka Prywatności</StyledH2> */}
      <div
        dangerouslySetInnerHTML={{
          __html: data.html.privacyPolicy,
        }}
      ></div>
    </Policy>
  </>
)

export const query = graphql`
  query privacyPolicy {
    html: datoCmsGeneral {
      privacyPolicy
    }
  }
`

export default privacyPolicy
