import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { MenuBar, MenuBarProps } from './menubar.component';

export default {
  title: 'Design System/Organisms/MenuBar',
  component: MenuBar,
  argTypes: { onPress: { action: 'clicked' } },
} as Meta;

const MenuBarTemplate: Story<MenuBarProps> = (args) => <MenuBar {...args} />;

export const basic = MenuBarTemplate.bind({});
basic.args = {};