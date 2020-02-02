import normalize from 'normalize.css'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans');
  html {
    box-sizing: border-box;
    font-size: 10px;
    font-family: 'Nunito Sans', sans-serif;
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
    }
    h2 {
      font-weight: normal;
      line-height: 1.5;
      margin: 0;
      font-size: 5rem;
    }
    a {
      text-decoration: none;
      cursor: pointer;
      transition: all .2s ease-in-out;


      &:active, &:hover, &:focus {
        outline: none;
        color: steelblue;
      }
    }
    li {
      list-style-type: none;
    }
  }
`

export default GlobalStyle
