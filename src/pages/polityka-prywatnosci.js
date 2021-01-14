import React from 'react'

import Policy, { StyledH2 } from '../components/Policy'

const privacyPolicy = () => (
  <>
    <Policy>
      <StyledH2>Polityka Prywatności</StyledH2>
      <p>
        Serwis wykorzystuje Google reCAPTCHA v.2 oraz oferowane przez firmę
        Google Ireland Limited („Google”), firmę zarejestrowaną i działającą
        zgodnie z prawem irlandzkim (numer rejestracyjny: 368047), z siedzibą
        pod adresem Gordon House, Barrow Street, Dublin 4, Irlandia – w celu
        monitoringu interakcji użytkownika na witrynie internetowej.
      </p>
      <p>
        Więcej informacji na temat warunków korzystania i ochrony danych
        znajdziesz na następującej witrynie internetowej&nbsp;
        <a href="https://policies.google.com/terms?hl=pl">
          https://policies.google.com/terms?hl=pl
        </a>
        &nbsp; oraz&nbsp;
        <a href="https://policies.google.com/privacy?hl=pl">
          https://policies.google.com/privacy?hl=pl
        </a>
      </p>
    </Policy>
  </>
)

export default privacyPolicy
