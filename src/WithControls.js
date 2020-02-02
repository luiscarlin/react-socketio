import React, { useState } from 'react'
import styled from 'styled-components'
import Switch from '@material-ui/core/Switch'
import socket from './socket'

const Wrapper = styled.main`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    text-align: center;
  }

  .message {
    color: ${props => props.color};
  }
`

const WithControls = () => {
  const [role, setRole] = useState(undefined)
  const [checked, setChecked] = useState(false)
  const [color, setColor] = useState('black')

  const handleChange = () => {
    setChecked(!checked)
    emitColorChange()
  }

  const renderControl = () => {
    return (
      <Switch
        checked={checked}
        onChange={handleChange}
        value="checked"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    )
  }

  const emitColorChange = () => {
    const nextColor = color === 'black' ? 'red' : 'black'
    setColor(nextColor)

    socket.emit('clientColorChange', nextColor)
  }

  socket.on('serverColorChange', newColor => {
    setColor(newColor)
  })

  return (
    <Wrapper color={color}>
      {role === undefined && (
        <h1>
          <a onClick={() => setRole('viewer')}>viewer</a> or{' '}
          <a onClick={() => setRole('controller')}>controller</a>?
        </h1>
      )}

      {role !== undefined && <h1 className="message">Hello Again!</h1>}

      {role === 'controller' && renderControl()}
    </Wrapper>
  )
}

export default WithControls
