import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button } from '../../../components/atoms/button/button.component';

import { ButtonProps } from './props';
import { ContextProvider } from '../../../context/provider';

export default {
  title: 'Design System/Atoms/Button',
  component: Button,
  decorators: [
    (Story) => (
      <ContextProvider>
        <Story />
      </ContextProvider>
    ),
  ],
  argTypes: {
    inverse: {
      control: 'boolean',
    },
    type: {
      control: { disable: true },
    },
    platform: {
      control: { disable: true },
    },
    icon: {
      control: { disable: true },
    },
    to: {
      control: { disable: true },
    },
    extendsTo: {
      control: { disable: true },
    },
  },
} as Meta;

const disableInverse = {
  inverse: {
    control: {
      disable: true,
    },
  },
};

const disableTitle = {
  title: {
    control: {
      disable: true,
    },
  },
};

const ButtonTemplate: Story<ButtonProps> = (args) => <Button {...args} />;

export const globe = ButtonTemplate.bind({});
globe.args = {
  type: 'globe',
};

export const host = ButtonTemplate.bind({});
host.args = {
  type: 'host',
};

export const menu = ButtonTemplate.bind({});
menu.args = {
  type: 'menu',
};
menu.argTypes = {
  ...disableTitle,
  user: {
    control: 'boolean',
  },
};

export const privacy = ButtonTemplate.bind({});
privacy.args = {
  type: 'privacy',
};

privacy.decorators = [
  (Story) => (
    <div style={{ width: 300 }}>
      <Story />
    </div>
  ),
];

export const border = ButtonTemplate.bind({});
border.args = {
  type: 'border',
};

export const banner = ButtonTemplate.bind({});
banner.args = {
  type: 'banner',
};

banner.decorators = [
  (Story) => (
    <div style={{ width: 200 }}>
      <Story />
    </div>
  ),
];

export const primary = ButtonTemplate.bind({});
primary.args = {
  type: 'primary',
};
primary.decorators = [
  (Story) => (
    <div style={{ width: 300 }}>
      <Story />
    </div>
  ),
];
primary.argTypes = {
  ...disableInverse,
  loading: {
    control: 'boolean',
  },
};

export const searchbar = ButtonTemplate.bind({});
searchbar.args = {
  type: 'searchbar',
};

export const auth = ButtonTemplate.bind({});
auth.args = {
  type: 'auth',
};

auth.decorators = [
  (Story) => (
    <div style={{ width: 300 }}>
      <Story />
    </div>
  ),
];

export const paginate = ButtonTemplate.bind({});
paginate.args = {
  type: 'paginate',
};

export const option = ButtonTemplate.bind({});
option.args = {
  type: 'option',
};

export const underline = ButtonTemplate.bind({});
underline.args = {
  type: 'underline',
};

export const filter = ButtonTemplate.bind({});
filter.args = {
  type: 'filter',
};

export const modal = ButtonTemplate.bind({});
modal.args = {
  type: 'modal',
};
modal.argTypes = {
  modalType: {
    control: {
      type: 'select',
      options: ['close', 'back'],
    },
  },
};

/**
 * Argtypes
 */

globe.argTypes = {
  ...disableTitle,
};

banner.argTypes = {
  ...disableInverse,
};

searchbar.argTypes = {
  ...disableInverse,
};
auth.argTypes = {
  ...disableInverse,
};
searchbar.argTypes = {
  mini: {
    control: 'boolean',
  },
};
border.argTypes = {
  size: {
    control: {
      type: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};
paginate.argTypes = {
  direction: {
    control: {
      type: 'select',
      options: ['left', 'right'],
    },
  },
};
