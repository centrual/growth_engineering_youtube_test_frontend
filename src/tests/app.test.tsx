import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../app/app';

test('renders app', () => {
  render(<App />);
  const linkElement = screen.getByText(/🖐/i);
  expect(linkElement).toBeInTheDocument();
});
