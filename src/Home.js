import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HomeWrapper = styled.main`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    text-align: center;
  }

  li {
    margin: 2rem;
  }

  a {
    font-size: 6rem;
    color: black;
  }
`

function Home() {
  return (
    <HomeWrapper>
      <h1>Select your demo</h1>
      <ui>
        <li>
          <Link to="/simple">Simple</Link>
        </li>
        <li>
          <Link to="/withcontrols">With Controls</Link>
        </li>
      </ui>
    </HomeWrapper>
  )
}

export default Home
