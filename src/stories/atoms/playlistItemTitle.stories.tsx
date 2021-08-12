import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PlaylistItemTitle from '../../app/components/atoms/playlistItemTitle/playlistItemTitle';

export default {
  title: 'Atoms/PlaylistItemTitle',
  component: PlaylistItemTitle,
  argTypes: {
    children: { defaultValue: 'Test title', name: 'Label' },
  },
  args: {
    children: 'Hello Growth Engineering 🖐',
  },
} as ComponentMeta<typeof PlaylistItemTitle>;

const Template: ComponentStory<typeof PlaylistItemTitle> = (args) => {
  const { children } = args;

  return (
    <PlaylistItemTitle>
      {children}
    </PlaylistItemTitle>
  );
};

export const Default = Template.bind({});
