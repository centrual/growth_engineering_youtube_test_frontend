import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import PlaylistToggleButton from '../../app/components/atoms/playlistToggleButton/playlistToggleButton';

export default {
  title: 'Atoms/PlaylistToggleButton',
  component: PlaylistToggleButton,
  argTypes: {
    toggled: { name: 'Is Toggled', type: 'boolean' },
  },
  args: {
    toggled: false,
  },
} as ComponentMeta<typeof PlaylistToggleButton>;

const Template: ComponentStory<typeof PlaylistToggleButton> = (args) => {
  const { toggled, onClick } = args;

  return (
    <PlaylistToggleButton toggled={toggled} onClick={onClick} />
  );
};

export const Default = Template.bind({});
