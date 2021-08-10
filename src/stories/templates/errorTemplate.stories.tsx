import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import LottiePlay from 'lottie-react';
import ErrorTemplate from '../../app/components/templates/errorTemplate/errorTemplate';
import NotFound from '../../assets/lottie/page_not_found.json';

export default {
  title: 'Templates/ErrorTemplate',
  component: ErrorTemplate,
  args: {
    imageArea: (<LottiePlay animationData={NotFound} />),
    code: 'Code Text',
    description: 'Description Text',
    buttonText: 'Button Text',
  },
  argTypes: {
    buttonText: { name: 'Button Text' },
    code: { name: 'Code Text' },
    imageArea: { name: 'Component to Display In Image Area' },
    description: { name: 'Description Text' },
    onButtonClicked: { name: 'On Button Clicked' },
  },
} as ComponentMeta<typeof ErrorTemplate>;

const Template: ComponentStory<typeof ErrorTemplate> = (args) => {
  const {
    buttonText,
    code,
    imageArea,
    onButtonClicked,
    description,
  } = args;

  return (
    <ErrorTemplate
      imageArea={imageArea}
      code={code}
      description={description}
      buttonText={buttonText}
      onButtonClicked={onButtonClicked}
    />
  );
};

export const Default = Template.bind({});
