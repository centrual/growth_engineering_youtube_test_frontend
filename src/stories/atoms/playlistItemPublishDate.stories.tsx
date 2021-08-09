import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PlaylistItemPublishDate from '../../app/components/atoms/playlistItemPublishDate/playlistItemPublishDate';

export default {
  title: 'Atoms/PlaylistItemPublishDate',
  component: PlaylistItemPublishDate,
  argTypes: {
    publishDate: { name: 'Publish Date', type: 'string' },
  },
} as ComponentMeta<typeof PlaylistItemPublishDate>;

const Template: ComponentStory<typeof PlaylistItemPublishDate> = (args) => {
  const { publishDate } = args;

  return (
    <PlaylistItemPublishDate publishDate={publishDate} />
  );
};

export const Default = Template.bind({});
Default.args = {
  publishDate: '2021-02-09T11:04:55Z',
};
