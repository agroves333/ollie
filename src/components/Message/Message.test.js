import React from 'react'
import { render, screen } from '@testing-library/react'

import Message from './index'

describe('Message', () => {
  test('renders Message component with default values', () => {
    render(<Message />)
  })

  test('renders correct text', () => {
    const message = {
      text: 'Test',
    }
    render(<Message message={message} />)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  test('renders black text by default', () => {
    const message = {
      text: 'test',
    }
    render(<Message message={message} />)
    expect(screen.getByTestId('message')).toHaveStyle('color: black')
  })

  test('renders green text when type = success', () => {
    const message = {
      text: 'test',
      type: 'success',
    }
    render(<Message message={message} />)
    expect(screen.getByTestId('message')).toHaveStyle('color: green')
  })

  test('renders red text when type = error', () => {
    const message = {
      text: 'test',
      type: 'error',
    }
    render(<Message message={message} />)
    expect(screen.getByTestId('message')).toHaveStyle('color: red')
  })

  test('renders black text when type = info', () => {
    const message = {
      text: 'test',
      type: 'info',
    }
    render(<Message message={message} />)
    expect(screen.getByTestId('message')).toHaveStyle('color: black')
  })
})
