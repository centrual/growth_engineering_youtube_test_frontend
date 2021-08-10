import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { VideoInfo } from '@centrual/geyt_api_client';
import Playlist from '../../app/components/organisms/playlist/playlist';

export default {
  title: 'Organisms/Playlist',
  component: Playlist,
  args: {
    opened: false,
    playlist: new Array<VideoInfo>(150).fill({
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
    }),
    activeVideoId: '',
    isLoadingMoreItems: false,
    isMoreItemsAvailable: true,
  },
  argTypes: {
    playlist: { name: 'Playlist' },
    opened: { name: 'Is Open', type: 'boolean' },
    activeVideoId: { name: 'Selected Video Id' },
    isLoadingMoreItems: { name: 'Is Loading More Items', type: 'boolean' },
    isMoreItemsAvailable: { name: 'Is More Items Available', type: 'boolean' },
    onVideoItemClicked: { name: 'On Clicked To Playlist Item' },
    onTogglePlaylistButtonClicked: { name: 'On Clicked To Toggle Button' },
    onScrolledToEnd: { name: 'On Playlist Scrolled To End' },
  },
} as ComponentMeta<typeof Playlist>;

const Template: ComponentStory<typeof Playlist> = (args) => {
  const {
    playlist,
    opened,
    isLoadingMoreItems,
    isMoreItemsAvailable,
    onScrolledToEnd,
    onTogglePlaylistButtonClicked,
    onVideoItemClicked,
    activeVideoId,
  } = args;

  return (
    <Playlist
      playlist={playlist}
      opened={opened}
      activeVideoId={activeVideoId}
      isLoadingMoreItems={isLoadingMoreItems}
      isMoreItemsAvailable={isMoreItemsAvailable}
      onVideoItemClicked={onVideoItemClicked}
      onTogglePlaylistButtonClicked={onTogglePlaylistButtonClicked}
      onScrolledToEnd={onScrolledToEnd}
    />
  );
};

export const Default = Template.bind({});
export const Empty = Template.bind({});
Empty.args = {
  opened: true,
  playlist: [],
};
