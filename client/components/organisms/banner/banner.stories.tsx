import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Banner } from './banner.component';
import { ContextProvider } from '../../../context/provider';
import { BannerProps } from './props';

export default {
  title: 'Design System/Organisms/Banner',
  component: Banner,
  argTypes: { onPress: { action: 'clicked' } },
  decorators: [
    (Story) => (
      <ContextProvider>
        <Story />
      </ContextProvider>
    ),
  ],
} as Meta;

const BannerTemplate: Story<BannerProps> = (args) => <Banner {...args} />;

export const homes = BannerTemplate.bind({});
homes.args = {
  type: 'homes',
};

export const experiences = BannerTemplate.bind({});
experiences.args = {
  type: 'experiences',
};

export const landing = BannerTemplate.bind({});
landing.args = {
  type: 'landing',
};

export const onlineHost = BannerTemplate.bind({});
onlineHost.args = {
  type: 'onlinehost',
};
