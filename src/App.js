import React, { useState } from 'react'
import styled from 'styled-components'
import io from 'socket.io-client'

const AppWrapper = styled.h1`
  text-align: center;
  font-size: 100px;
  color: black;
  cursor: pointer;

  &:hover {
    color: red;
  }
`

const socket = io()

socket.on('users', count => {
  console.log(count)
})

function App() {
  const [color, setColor] = useState('black')

  return (
    <AppWrapper onClick={() => console.log('hello')}>Hello World!</AppWrapper>
  )
}

export default App
