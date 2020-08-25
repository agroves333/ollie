import React from 'react'
import SignupForm from '@ollie/components/SignupForm'
import { Box } from 'rebass'

export default (props) => (
  <Box
    sx={{
      maxWidth: 1200,
      mx: 'auto',
      px: 3,
    }}
  >
    <SignupForm />
  </Box>
)
