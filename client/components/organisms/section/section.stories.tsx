import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Section } from './section.component';

import { SectionProps } from './props';
import { ContextProvider } from '../../../context/provider';

export default {
  title: 'Design System/Organisms/Section',
  component: Section,
  argTypes: {
    onPress: { action: 'clicked' },
    type: { control: { disable: true } },
    extendsTo: { control: { disable: true } },
    layoutType: {
      control: {
        type: 'select',
        options: ['room', 'experience'],
      },
    },
    superhost: {
      control: 'boolean',
    },
  },
  decorators: [
    (Story) => (
      <ContextProvider>
        <Story />
      </ContextProvider>
    ),
  ],
} as Meta;

const SectionTemplate: Story<SectionProps> = (args) => <Section {...args} />;

export const categories = SectionTemplate.bind({});
categories.args = {
  type: 'category',
};

export const stayTypes = SectionTemplate.bind({});
stayTypes.args = {
  type: 'stay',
  carouselType: 'stayTypes',
};

export const stayWithPagination = SectionTemplate.bind({});
stayWithPagination.args = {
  type: 'stay',
  pagination: true,
  save: true,
  isDescription: true,
};

export const twoRows = SectionTemplate.bind({});
twoRows.args = {
  type: 'stay',
  save: true,
  isDescription: true,
};

export const panel = SectionTemplate.bind({});
panel.args = {
  type: 'panel',
};

export const characteristics = SectionTemplate.bind({});
characteristics.args = {
  type: 'characteristics',
};

export const description = SectionTemplate.bind({});
description.args = {
  type: 'description',
};

description.decorators = [
  (Story) => (
    <div style={{ maxWidth: 600 }}>
      <Story />
    </div>
  ),
];

export const arrangements = SectionTemplate.bind({});
arrangements.args = {
  type: 'arrangements',
};

export const amenities = SectionTemplate.bind({});
amenities.args = {
  type: 'amenities',
};
amenities.decorators = [
  (Story) => (
    <div style={{ maxWidth: 600 }}>
      <Story />
    </div>
  ),
];

export const reviews = SectionTemplate.bind({});
reviews.args = {
  type: 'reviews',
};

export const host = SectionTemplate.bind({});
host.args = {
  type: 'host',
};
host.decorators = [
  (Story) => (
    <div style={{ maxWidth: 1280 }}>
      <Story />
    </div>
  ),
];

export const know = SectionTemplate.bind({});
know.args = {
  type: 'know',
};

export const other = SectionTemplate.bind({});
other.args = {
  type: 'other',
};

export const nearby = SectionTemplate.bind({});
nearby.args = {
  type: 'nearby',
};

export const destinations = SectionTemplate.bind({});
destinations.args = {
  type: 'destinations',
};

export const online = SectionTemplate.bind({});
online.args = {
  type: 'online',
};

online.argTypes = {
  dark: {
    control: 'boolean',
  },
};

export const homes = SectionTemplate.bind({});
homes.args = {
  type: 'homes',
};

export const also = SectionTemplate.bind({});
also.args = {
  type: 'also',
};

export const participate = SectionTemplate.bind({});
participate.args = {
  type: 'participate',
};

export const bring = SectionTemplate.bind({});
bring.args = {
  type: 'bring',
};

export const experiences = SectionTemplate.bind({});
experiences.args = {
  type: 'experiences',
};

export const available = SectionTemplate.bind({});
available.args = {
  type: 'available',
};

export const all = SectionTemplate.bind({});
all.args = {
  type: 'all',
};

export const priority = SectionTemplate.bind({});
priority.args = {
  type: 'priority',
};

export const help = SectionTemplate.bind({});
help.args = {
  type: 'help',
};

export const ready = SectionTemplate.bind({});
ready.args = {
  type: 'ready',
};

export const works = SectionTemplate.bind({});
works.args = {
  type: 'works',
};
