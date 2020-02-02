import normalize from 'normalize.css'
import { createGlobalStyle } from 'styled-components'
import { darken } from 'polished'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  html {
    box-sizing: border-box;
    font-size: 10px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html,
  body,
  #root {
    height: 100%;
  }
  body {
    background: white;
    transition: all .7s ease-in-out;
    h1 {
      line-height: 1.5;
      margin: 0;
      font-size: 8rem;
      @media only screen and (max-width: 900px) {
        font-size: 7rem;
      }
      @media only screen and (max-width: 600px) {
        font-size: 6rem;
      }
    }
    }
    h2 {
      font-weight: normal;
      line-height: 1.5;
      margin: 0;
      font-size: 5rem;
      color: black;
      @media only screen and (max-width: 900px) {
        font-size: 4rem;
      }
      @media only screen and (max-width: 600px) {
        font-size: 3rem;
      }
    }
    a {
      text-decoration: none;
      cursor: pointer;
      transition: all .2s ease-in-out;
      color: steelblue;


      &:active, &:hover, &:focus {
        outline: none;
        color: ${darken(0.2, 'steelblue')};
      }
    }
    li {
      list-style-type: none;
    }
  }
`

export default GlobalStyle
