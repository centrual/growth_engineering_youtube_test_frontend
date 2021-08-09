import React from 'react';
import { render, screen } from '@testing-library/react';
import PlaylistItemViewCount from './playlistItemViewCount';

test('renders zero when the view count below zero', () => {
  render(<PlaylistItemViewCount viewCount={-1} />);
  const elm = screen.getByText(/0/i);
  expect(elm).toBeInTheDocument();
});

test('renders formatted number', () => {
  render(<PlaylistItemViewCount viewCount={1000000} />);
  const elm = screen.getByText(/1\.000\.000/i);
  expect(elm).toBeInTheDocument();
});
