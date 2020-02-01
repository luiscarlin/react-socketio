import React, { useState } from 'react'
import styled from 'styled-components'
import socket from './socket'

const AppWrapper = styled.main`
  text-align: center;

  h1 {
    font-size: 100px;
    color: ${props => props.color};
    cursor: pointer;
  }
`

function App() {
  const [color, setColor] = useState('black')
  const [numUsers, setNumUsers] = useState(0)

  const emitColorChange = () => {
    const nextColor = color === 'black' ? 'red' : 'black'
    setColor(nextColor)

    socket.emit('clientColorChange', nextColor)
  }

  socket.on('users', count => {
    setNumUsers(count)
  })

  socket.on('serverColorChange', newColor => {
    console.log('old', color, 'new', newColor)
    setColor(newColor)
  })

  return (
    <AppWrapper color={color}>
      <h1 onClick={() => emitColorChange()}>Hello World!</h1>
      <h2>Connected Browsers: {numUsers}</h2>
    </AppWrapper>
  )
}

export default App
