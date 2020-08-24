import React from 'react'
import { Box } from 'reflexbox'

export default ({ message = {} }) => {
  const { text = '', type = 'info' } = message
  let color
  switch (type) {
    case 'success':
      color = 'green'
      break
    case 'error':
      color = 'red'
      break
    case 'info':
      color = 'black'
      break
    default:
      color = 'black'
  }

  return (
    <Box py={3} color={color} data-testid="message">
      {text}
    </Box>
  )
}
