import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Simple from './Simple'
import WithControls from './WithControls'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/simple">
          <Simple />
        </Route>
        <Route path="/withcontrols">
          <WithControls />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
