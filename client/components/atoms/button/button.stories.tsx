import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Button } from "../../../components/atoms/button/button.component";

import { ButtonProps } from "./props";
import { ContextProvider } from "../../../context/provider";

import font from "../../../styles/font.module.scss";
import button from "./button.module.scss";
import color from "../../../styles/color.module.scss";
import layout from "../../../styles/layout.module.scss";
import shape from "../../../styles/shape.module.scss";
import space from "../../../styles/space.module.scss";
import animation from "../../../styles/animation.module.scss";
import Router from "next/router";

export default {
  title: "Design System/Atoms/Button",
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
      control: "boolean",
    },
    type: {
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
  type: "globe",
  extendsTo: [color["bg--transparent"], shape["br--30"]].join(" "),
};
globe.argTypes = {
  ...disableTitle,
};

export const host = ButtonTemplate.bind({});
host.args = {
  type: "host",
  onPress: () => Router.push("/host/homes"),
};

export const menu = ButtonTemplate.bind({});
menu.args = {
  type: "menu",
  extendsTo: [
    shape["br--30"],
    color["bg--transparent"],
    animation["hover-shadow--lg"],
  ].join(" "),
};
menu.argTypes = {
  ...disableTitle,
  user: {
    control: "boolean",
  },
};

export const privacy = ButtonTemplate.bind({});
privacy.args = {
  type: "privacy",
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
  type: "border",
  extendsTo: [color["bg--transparent"]].join(" "),
};
border.argTypes = {
  size: {
    control: {
      type: "select",
      options: ["sm", "md", "lg"],
    },
  },
  bold: {
    control: "boolean",
  },
};

export const banner = ButtonTemplate.bind({});
banner.args = {
  type: "banner",
  extendsTo: [color["bg--white"], shape["br--6"]].join(" "),
};
banner.argTypes = {
  ...disableInverse,
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
  type: "primary",
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
    control: "boolean",
  },
};

export const searchbar = ButtonTemplate.bind({});
searchbar.args = {
  type: "searchbar",
};
searchbar.argTypes = {
  ...disableInverse,
  mini: {
    control: "boolean",
  },
};

export const auth = ButtonTemplate.bind({});
auth.args = {
  type: "auth",
  extendsTo: [
    button["hover__auth"],
    color["bg--transparent"],
    layout["block"],
    shape["w--full"],
    space["p-h--12"],
    space["p-v--12"],
    shape["br--8"],
  ].join(" "),
};

auth.decorators = [
  (Story) => (
    <div style={{ width: 300 }}>
      <Story />
    </div>
  ),
];

auth.argTypes = {
  auth: {
    control: {
      type: "select",
      options: ["email", "facebook", "google", "apple"],
    },
  },
};

export const paginate = ButtonTemplate.bind({});
paginate.args = {
  type: "paginate",
};
paginate.argTypes = {
  direction: {
    control: {
      type: "select",
      options: ["left", "right"],
    },
  },
};

export const option = ButtonTemplate.bind({});
option.args = {
  type: "option",
  extendsTo: [shape["w--full"]].join(" "),
};

export const underline = ButtonTemplate.bind({});
underline.args = {
  type: "underline",
};

export const filter = ButtonTemplate.bind({});
filter.args = {
  type: "filter",
};

export const modal = ButtonTemplate.bind({});
modal.args = {
  type: "modal",
};
modal.argTypes = {
  modalType: {
    control: {
      type: "select",
      options: ["close", "back"],
    },
  },
};

export const back = ButtonTemplate.bind({});
back.args = {
  type: "back",
};
