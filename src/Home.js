import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HomeWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 100px;
  }

  li,
  a {
    list-style-type: none;
  }

  a {
    font-size: 50px;
    text-decoration: none;
    color: SteelBlue;
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
      </ui>
    </HomeWrapper>
  )
}

export default Home
