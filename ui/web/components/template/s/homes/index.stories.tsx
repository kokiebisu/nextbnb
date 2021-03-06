import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Template, TemplateProps, $Template } from "@template/s/homes";

export default {
  title: "Templates/S/Homes",
  component: Template,
  argTypes: {
    onClick: { action: "clicked" },
    type: { control: { disable: true } },
    extendsTo: { control: { disable: true } },
  },
} as Meta;

const TemplateStory: Story<TemplateProps> = (args) => <Template {...args} />;

export const Multiple = TemplateStory.bind({});
Multiple.args = {
  variant: $Template.MULTIPLE,
};

export const Homes = TemplateStory.bind({});
Homes.args = {
  variant: $Template.HOMES,
};

export const Also = TemplateStory.bind({});
Also.args = {
  variant: $Template.ALSO,
};
