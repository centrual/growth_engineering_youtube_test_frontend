import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PlaylistItemViewCount from '../../app/components/atoms/playlistItemViewCount/playlistItemViewCount';

export default {
  title: 'Atoms/PlaylistItemViewCount',
  component: PlaylistItemViewCount,
  argTypes: {
    viewCount: { name: 'View Count', type: 'number' },
  },
  args: {
    viewCount: 1000000,
  },
} as ComponentMeta<typeof PlaylistItemViewCount>;

const Template: ComponentStory<typeof PlaylistItemViewCount> = (args) => {
  const { viewCount } = args;

  return (
    <PlaylistItemViewCount viewCount={viewCount} />
  );
};

export const Default = Template.bind({});
