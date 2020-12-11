import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    color: ${({ theme }) => theme.colorSecondary};
    background-color: ${({ theme }) => theme.bgColorPrimary};
    font-size: ${({ theme }) => theme.fontSize};
    font-weight: ${({ theme }) => theme.fontNormal};
  }
  main {
    margin: 0;
    padding: 0;
  }
  a {
    color: ${({ theme }) => theme.colorTertiary};
    cursor: pointer;
    transition: color 0.3s ease;
    text-decoration: underline ${({ theme }) => theme.colorTertiary};
    &:hover {
      color: ${({ theme }) => theme.colorPrimary};
      text-decoration-color: ${({ theme }) => theme.colorSecondary};
    }
  }
  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Montserrat';
  }
  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colorPrimary};
    font-weight: ${({ theme }) => theme.fontBold};
  };
  p {
    color: ${({ theme }) => theme.colorSecondary};
    font-size: ${({ theme }) => theme.fontSize};
  }
  ul {
    padding: 0;
    margin: 0;
  }
  small {
    font-size: .83em;
  }
`

export default GlobalStyle
