import React from 'react';
import { render, screen } from '@testing-library/react';
import PlaylistItemTitle from './playlistItemTitle';

test('Renders right text', () => {
  render(<PlaylistItemTitle>Hello Growth Engineering 🖐</PlaylistItemTitle>);
  const elm = screen.getByText(/Hello Growth Engineering 🖐/i);
  expect(elm).toBeInTheDocument();
});
