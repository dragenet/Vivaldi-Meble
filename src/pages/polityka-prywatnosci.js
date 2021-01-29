import React from 'react'

import SEO from '../components/seo'
import Policy from '../components/Policy'

const privacyPolicy = ({ data }) => (
  <>
    <SEO title="Polityka prywatności" />
    <Policy>
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
