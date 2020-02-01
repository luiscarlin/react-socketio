import React, { useState } from 'react'
import styled from 'styled-components'
import socket from './socket'

const SimpleWrapper = styled.main`
  text-align: center;

  h1 {
    font-size: 100px;
    color: ${props => props.color};
    cursor: pointer;
  }
`

function Simple() {
  const [color, setColor] = useState('black')

  const emitColorChange = () => {
    const nextColor = color === 'black' ? 'red' : 'black'
    setColor(nextColor)

    socket.emit('clientColorChange', nextColor)
  }

  socket.on('serverColorChange', newColor => {
    console.log('old', color, 'new', newColor)
    setColor(newColor)
  })

  return (
    <SimpleWrapper color={color}>
      <h1 onClick={() => emitColorChange()}>Hello World!</h1>
    </SimpleWrapper>
  )
}

export default Simple
