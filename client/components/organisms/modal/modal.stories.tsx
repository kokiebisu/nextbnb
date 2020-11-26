import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Modal } from './modal.component';
import { ContextProvider } from '../../../context/provider';
import { ModalProps } from './props';

export default {
  title: 'Design System/Organisms/Modal',
  argTypes: { onPress: { action: 'clicked' } },
  decorators: [
    (Story) => (
      <ContextProvider>
        <Story />
      </ContextProvider>
    ),
  ],
} as Meta;

const ModalTemplate: Story<ModalProps> = (args) => <Modal {...args} />;

export const privacy = ModalTemplate.bind({});
privacy.args = {
  type: 'privacy',
};

export const menu = ModalTemplate.bind({});
menu.args = {
  type: 'menu',
  dispatchType: 'toggle_menu',
};
menu.argTypes = {
  authenticated: {
    control: 'boolean',
  },
};

export const auth = ModalTemplate.bind({});
auth.args = {
  type: 'auth',
};

export const availability = ModalTemplate.bind({});
availability.args = {
  type: 'availability',
};

export const booking = ModalTemplate.bind({});
booking.args = {
  type: 'booking',
};
