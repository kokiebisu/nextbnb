import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { BulletProps } from './props';
import { Bullet } from './bullet.component';

export default {
  title: 'Design System/Atoms/Bullet',
  component: Bullet,
  argTypes: {
    type: {
      control: { disable: true },
    },
    extendsTo: {
      control: { disable: true },
    },
  },
} as Meta;

const BulletTemplate: Story<BulletProps> = (args) => <Bullet {...args} />;

export const characteristic = BulletTemplate.bind({});
characteristic.args = {
  type: 'characteristic',
};
characteristic.argTypes = {
  characteristicType: {
    control: {
      type: 'select',
      options: ['house', 'sparkle', 'door', 'calendar', 'guidelines', 'time'],
    },
  },
};

export const amenity = BulletTemplate.bind({});
amenity.args = {
  type: 'amenity',
};
amenity.argTypes = {
  removed: {
    control: 'boolean',
  },
  amenityType: {
    control: {
      type: 'select',
      options: ['smoke', 'tv', 'kitchen', 'heating', 'entrance', 'carbon'],
    },
  },
};

export const review = BulletTemplate.bind({});
review.args = {
  type: 'score',
};
review.decorators = [
  (Story) => (
    <div style={{ width: 300 }}>
      <Story />
    </div>
  ),
];

export const know = BulletTemplate.bind({});
know.args = {
  type: 'know',
};
know.argTypes = {
  categoryType: {
    control: {
      type: 'select',
      options: [
        'checkin',
        'checkout',
        'self',
        'children',
        'smoking',
        'pets',
        'parties',
        'cleaning',
        'distancing',
        'caution',
        'check',
      ],
    },
  },
};

export const rating = BulletTemplate.bind({});
rating.args = {
  type: 'rating',
};

export const bring = BulletTemplate.bind({});
bring.args = {
  type: 'bring',
};

export const experience = BulletTemplate.bind({});
experience.args = {
  type: 'experience',
};
experience.argTypes = {
  experienceType: {
    control: {
      type: 'select',
      options: ['host', 'activities', 'global'],
    },
  },
};

export const priority = BulletTemplate.bind({});
priority.args = {
  type: 'priority',
};
priority.argTypes = {
  priority: {
    control: {
      type: 'select',
      options: ['protection', 'guidance', 'requirements'],
    },
  },
};

export const help = BulletTemplate.bind({});
help.args = {
  type: 'help',
};
help.argTypes = {
  help: {
    control: {
      type: 'select',
      options: ['support', 'tools', 'insights', 'education'],
    },
  },
};

export const required = BulletTemplate.bind({});
required.args = {
  type: 'required',
};

export const onlinehost = BulletTemplate.bind({});
onlinehost.args = {
  type: 'onlinehost',
};
onlinehost.argTypes = {
  bullet: {
    control: {
      type: 'select',
      options: ['home', 'global', 'business'],
    },
  },
};
