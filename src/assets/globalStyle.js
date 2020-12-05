import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    color: ${({ theme }) => theme.colorPrimary};
    background-color: ${({ theme }) => theme.bgColorPrimary};
    //overflow-x: hidden;
  }
  main {
    margin: 0;
    padding: 0;
  }
  a {
    color: inherit;
    transition: color 0.3s ease;
    &:hover {
      color: ${({ theme }) => theme.colorSecondary};
    }
  }
  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Montserrat';
  }
  p {
    font-size: 16px;
  }
  ul {
    padding: 0;
    margin: 0;
  }
`

export default GlobalStyle
