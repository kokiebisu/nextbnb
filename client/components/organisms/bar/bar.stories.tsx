import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { BarProps } from './props';
import { Bar } from './bar.component';

export default {
  title: 'Design System/Organisms/Bar',
  component: Bar,
  argTypes: { type: { control: { disable: true } } },
} as Meta;

const BarStories: Story<BarProps> = (args) => <Bar {...args} />;

export const paginate = BarStories.bind({});
paginate.args = {
  type: 'paginate',
};

export const covid = BarStories.bind({});
covid.args = {
  type: 'covid',
};
