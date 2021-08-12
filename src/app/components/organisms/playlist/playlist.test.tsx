import React from 'react';
import { render, screen } from '@testing-library/react';
import Playlist from './playlist';
import Styles from './playlist.module.css';

test('renders empty list image when no items in playlist', () => {
  render(<Playlist playlist={[]} opened={false} />);
  const elm = screen.getByTestId('emptyPlaylist');
  expect(elm).toBeInTheDocument();
});

test('renders playlist', () => {
  render(<Playlist
    playlist={[
      {
        videoId: 'k-O-BH9GN-4',
        viewCount: 123321,
        likeCount: 21213,
        dislikeCount: 212332,
        publishedAt: '2021-02-09T11:04:08Z',
        channelId: 'UCTI5S0PqpgB0DbYgcgRU6QQ',
        title: 'The Academy LMS: Impact Fuelled by Learner Engagement!',
        description: 'Improve your team’s performance by as much as 75% year-on-year, with a learning management system that uses the power of engagement, behavioural science and learning best practice to drive results.\n\nwww.growthengineering.co.uk',
        thumbnails: {
          _default: {
            url: 'https://i.ytimg.com/vi/3aaMLjHToBM/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/3aaMLjHToBM/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/3aaMLjHToBM/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: {
            url: 'https://i.ytimg.com/vi/3aaMLjHToBM/sddefault.jpg',
            width: 640,
            height: 480,
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/3aaMLjHToBM/maxresdefault.jpg',
            width: 1280,
            height: 720,
          },
        },
      }]}
    opened
  />);
  const elm = screen.getByTestId('playlistScrollArea');
  expect(elm.childNodes.length).toBeGreaterThan(0);
});

test('renders loader when loading with no items', () => {
  render(<Playlist
    playlist={[]}
    opened
    isLoadingMoreItems
    isMoreItemsAvailable
  />);
  const elm = screen.getByTestId('playlistScrollArea');
  expect(elm.childNodes.item(0)).toHaveClass(Styles.loaderContainerEmptyList);
});

test('renders loader when loading with no items', () => {
  render(<Playlist
    playlist={[]}
    opened
    isLoadingMoreItems
    isMoreItemsAvailable
  />);
  const elm = screen.getByTestId('playlistScrollArea');
  expect(elm.childNodes.item(elm.childNodes.length - 1)).toHaveClass(Styles.loaderContainer);
});
