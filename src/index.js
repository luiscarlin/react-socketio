import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyle from './GlobalStyle'

function Root() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <App />
    </React.Fragment>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'))
