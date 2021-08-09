import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import classNames from 'classnames';
import { VideoInfo } from '@centrual/geyt_api_client';
import PlaylistItem from './playlistItem';
import Styles from './playlistItem.module.css';

const sampleVideo: VideoInfo = {
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
};

test('renders playlist item', () => {
  render(<PlaylistItem video={sampleVideo} />);
  const elm = screen.getByTestId('playlistItem');
  expect(elm).toBeInTheDocument();
  expect(elm).toHaveClass(Styles.playlistItem);
  expect(elm).not.toHaveClass(Styles.playlistItemActive);
});

test('renders active playlist item', () => {
  render(<PlaylistItem video={sampleVideo} active />);
  const elm = screen.getByTestId('playlistItem');
  expect(elm).toHaveClass(classNames(Styles.playlistItem, Styles.playlistItemActive));
});

test('playlist item click event should work', () => {
  const clickHandler = jest.fn();

  render(<PlaylistItem video={sampleVideo} onClick={clickHandler} />);
  const elm = screen.getByTestId('playlistItem');
  fireEvent.click(elm);
  expect(clickHandler).toBeCalledTimes(1);
});
