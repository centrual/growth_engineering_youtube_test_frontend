import React from 'react';
import App from '../app/app';
import { render, screen } from '@testing-library/react';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/🖐/i);
  expect(linkElement).toBeInTheDocument();
});
