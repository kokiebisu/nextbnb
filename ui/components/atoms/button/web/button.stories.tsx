import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Button, ButtonProps, $Button } from ".";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    inverse: {
      control: "boolean",
    },
    variant: {
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

const TemplateStory: Story<ButtonProps> = (args) => <Button {...args} />;

export const Auth = TemplateStory.bind({});
Auth.args = {
  variant: $Button.AUTH,
};

Auth.decorators = [
  (Story) => (
    <div style={{ width: 300 }}>
      <Story />
    </div>
  ),
];

Auth.argTypes = {
  auth: {
    control: {
      type: "select",
      options: ["email", "facebook", "google", "apple"],
    },
  },
};

export const Back = TemplateStory.bind({});
Back.args = {
  variant: $Button.BACK,
};

export const Underline = TemplateStory.bind({});
Underline.args = {
  variant: $Button.UNDERLINE,
};

export const Banner = TemplateStory.bind({});
Banner.args = {
  variant: $Button.BANNER,
};

export const Bar = TemplateStory.bind({});
Bar.args = {
  variant: $Button.BAR,
};

export const Closed = TemplateStory.bind({});
Closed.args = {
  variant: $Button.CLOSED,
};

export const Privacy = TemplateStory.bind({});
Privacy.args = {
  variant: $Button.PRIVACY,
};

export const Destination = TemplateStory.bind({});
Destination.args = {
  variant: $Button.DESTINATION,
};