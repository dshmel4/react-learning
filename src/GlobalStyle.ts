import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  html, body {
    min-width: 768px;
    width: 100%;
    overflow-y: hidden;
    word-wrap: break-word;
  }
  
  body {
    font-family: SBSansText, sans-serif;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.3px;
    margin: 0;
    padding: 0;
  }
  
  a {
    text-decoration-line: none;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  [type="checkbox"], [type="radio"] {
    outline: none;
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background: lightgray;
    border: gray;
    border-radius: 6px;

    &:hover {
      background: gray;
    }
  }
`
