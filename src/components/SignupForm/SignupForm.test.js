import React from 'react'
import { render } from '@testing-library/react'

import SignupForm from './index'

describe('SignupForm', () => {
  test('renders SignupForm component', () => {
    render(<SignupForm />)
  })
})
