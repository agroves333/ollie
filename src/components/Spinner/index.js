import React from 'react'
import Loader from 'react-spinners/ClipLoader'
import { Box } from 'reflexbox'
import theme from '../../theme'

export default () => (
  <Box
    sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }}
  >
    <Loader size={150} color={theme.colors.primary} />
  </Box>
)
