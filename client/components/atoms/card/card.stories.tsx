import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Card } from './card.component';

import { CardProps } from './props';

export default {
  title: 'Design System/Atoms/Card',
  component: Card,
  argTypes: {
    onPress: { action: 'clicked' },
    type: {
      control: {
        disable: true,
      },
    },
    extendsTo: {
      control: {
        disable: true,
      },
    },
    to: {
      control: {
        disable: true,
      },
    },
  },
} as Meta;

const CardTemplate: Story<CardProps> = (args) => <Card {...args} />;

export const category = CardTemplate.bind({});
category.args = {
  type: 'category',
};

category.decorators = [
  (Story) => (
    <div style={{ width: 300 }}>
      <Story />
    </div>
  ),
];

export const horizontal = CardTemplate.bind({});
horizontal.args = {
  type: 'horizontal',
};

// horizontal.decorators = [
//   (Story) => (
//     <div style={{ width: 300 }}>
//       <Story />
//     </div>
//   ),
// ];

horizontal.argTypes = {
  superhost: {
    control: 'boolean',
  },
  save: {
    control: 'boolean',
  },
};

export const vertical = CardTemplate.bind({});
vertical.args = {
  type: 'vertical',
};
vertical.argTypes = {
  save: {
    control: 'boolean',
  },
};

export const typeStay = CardTemplate.bind({});
typeStay.args = {
  type: 'typestay',
};

typeStay.decorators = [
  (Story) => (
    <div style={{ width: 200 }}>
      <Story />
    </div>
  ),
];

export const arrangements = CardTemplate.bind({});
arrangements.args = {
  type: 'arrangements',
};

export const checkin = CardTemplate.bind({});
checkin.args = {
  type: 'checkin',
};

checkin.decorators = [
  (Story) => (
    <div style={{ width: 500 }}>
      <Story />
    </div>
  ),
];

export const review = CardTemplate.bind({});
review.args = {
  type: 'review',
};

export const stay = CardTemplate.bind({});
stay.args = {
  type: 'stay',
};

export const nearby = CardTemplate.bind({});
nearby.args = {
  type: 'nearby',
};

export const online = CardTemplate.bind({});
online.args = {
  type: 'online',
};

online.decorators = [
  (Story) => (
    <div style={{ maxWidth: 600 }}>
      <Story />
    </div>
  ),
];

export const participate = CardTemplate.bind({});
participate.args = {
  type: 'participate',
};
participate.argTypes = {
  categoryType: {
    control: {
      type: 'select',
      options: ['call', 'private'],
    },
  },
};

export const available = CardTemplate.bind({});
available.args = {
  type: 'available',
};

export const host = CardTemplate.bind({});
host.args = {
  type: 'host',
};
host.decorators = [
  (Story) => (
    <div style={{ width: 400 }}>
      <Story />
    </div>
  ),
];

export const set = CardTemplate.bind({});
set.args = {
  type: 'set',
};

export const again = CardTemplate.bind({});
again.args = {
  type: 'again',
};

export const works = CardTemplate.bind({});
works.args = {
  type: 'works',
};
works.argTypes = {
  work: {
    control: {
      type: 'select',
      options: ['design', 'share', 'submit', 'setup'],
    },
  },
};
