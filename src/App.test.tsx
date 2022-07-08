import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders App text successfully', () => {
  render(<App />)
  const linkElement = screen.getByText(/strict app/i)
  expect(linkElement).toBeInTheDocument()
})
