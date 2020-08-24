import React from 'react'
import { Box } from 'reflexbox'

export default ({ message }) => {
  let color
  switch (message.type) {
    case 'success':
      color = 'green'
      break
    case 'error':
      color = 'red'
      break
    default:
      color = 'black'
  }
  return (
    <Box py={3} color={color}>
      {message.text}
    </Box>
  )
}
