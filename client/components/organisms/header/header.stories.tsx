import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Header } from './header.component';
import { ContextProvider } from '../../../context/provider';
import { HeaderProps } from './props';

export default {
  title: 'Design System/Organisms/Header',
  component: Header,
  argTypes: { onPress: { action: 'clicked' } },
  decorators: [
    (Story) => (
      <ContextProvider>
        <Story />
      </ContextProvider>
    ),
  ],
} as Meta;

const HeaderTemplate: Story<HeaderProps> = (args) => <Header {...args} />;

export const transparent = HeaderTemplate.bind({});
transparent.args = {
  type: 'transparent',
};

export const white = HeaderTemplate.bind({});
white.args = {
  type: 'white',
};

export const details = HeaderTemplate.bind({});
details.args = {
  type: 'details',
};

export const homes = HeaderTemplate.bind({});
homes.args = {
  type: 'homes',
};

export const experiences = HeaderTemplate.bind({});
experiences.args = {
  type: 'experiences',
};

export const onlineHost = HeaderTemplate.bind({});
onlineHost.args = {
  type: 'onlinehost',
};
