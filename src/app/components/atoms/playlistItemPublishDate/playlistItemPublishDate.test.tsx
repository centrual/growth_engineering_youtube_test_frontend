import React from 'react';
import { render, screen } from '@testing-library/react';
import moment from 'moment-timezone';
import PlaylistItemPublishDate from './playlistItemPublishDate';

test('renders publish date not shared when date invalid.', () => {
  render(<PlaylistItemPublishDate publishDate="unknown" />);
  const elm = screen.getByText(/Publish date not shared/i);
  expect(elm).toBeInTheDocument();
});

test('renders formatted date info when date valid.', () => {
  render(<PlaylistItemPublishDate publishDate={moment().toISOString()} />);
  const elm = screen.getByText(/a few seconds ago/i);
  expect(elm).toBeInTheDocument();
});
