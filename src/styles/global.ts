import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;

    margin: 0;
    padding: 0;

    :focus {
      outline: none;

      box-shadow: 0px 0px 0px 2px ${(params) => params.theme.colors.green[200]};
    }
  }

  body {
    background-color: ${(params) => params.theme.colors.gray[800]};
  }

  body, button, input, p, a {
    font-size: 1rem;
    font-weight: normal;
    color: ${(params) => params.theme.colors.gray[200]};
    line-height: 160%;
    font-family: 'Nunito', sans-serif;
  }
`
