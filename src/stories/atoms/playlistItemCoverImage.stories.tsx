import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import PlaylistItemCoverImage from
  '../../app/components/atoms/playlistItemCoverImage/playlistItemCoverImage';

export default {
  title: 'Atoms/PlaylistItemCoverImage',
  component: PlaylistItemCoverImage,
  argTypes: {
    thumbnails: { name: 'Thumbnails' },
  },
  args: {
    thumbnails: {
      maxres: {
        url: 'https://i.ytimg.com/vi/icUrjrctDJA/sddefault.jpg',
        width: 640,
        height: 480,
      },
      _default: {
        url: 'https://i.ytimg.com/vi/icUrjrctDJA/sddefault.jpg',
        width: 640,
        height: 480,
      },
      standard: {
        url: 'https://i.ytimg.com/vi/icUrjrctDJA/sddefault.jpg',
        width: 640,
        height: 480,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/k-O-BH9GN-4/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/k-O-BH9GN-4/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
  },
} as ComponentMeta<typeof PlaylistItemCoverImage>;

const Template: ComponentStory<typeof PlaylistItemCoverImage> = (args) => {
  const { thumbnails } = args;

  return (
    <PlaylistItemCoverImage thumbnails={thumbnails} />
  );
};

export const Default = Template.bind({});
