import type { Meta, StoryObj } from "@storybook/react";

import OnePieceButton, { buttons, initProps } from ".";
import colors from "../../../shared-data-for-styles/colors";
import { roundingOptionsKeys } from "../../../shared-data-for-styles/element-rounding";
import { TAB_reactionOptionsKeys } from "../../../shared-data-for-styles/TAB-on-element/reaction-options";
import { loadingIconsKeys } from "../../../shared-data-for-styles/loading-icons";
import { hover_reactionOptionsKeys } from "./../../../shared-data-for-styles/hover-on-element/reaction-options";

const meta = {
  title: "Buttons/OnePieceButtons",
  component: OnePieceButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "wip"],
  argTypes: {
    text: {
      required: true,
      control: "text",
      description: "Text in button.",
      defaultValue: "click",
    },
    color: {
      control: "select",
      options: colors,
      description: "Button color scheme for transitions.",
      defaultValue: initProps.color,
    },
    initColor: {
      control: "select",
      options: colors,
      description: "Button color scheme.",
      defaultValue: initProps.initColor,
    },
    bgcolor: {
      control: "select",
      options: colors,
      description: "Button background-color scheme for transitions.",
      defaultValue: initProps.bgcolor,
    },
    initBgcolor: {
      control: "select",
      options: colors,
      description: "Button background-color scheme.",
      defaultValue: initProps.initBgcolor,
    },
    kind: {
      control: "select",
      options: buttons,
      description: "Button kind.",
      defaultValue: initProps.kind,
    },
    rounding: {
      control: "select",
      options: roundingOptionsKeys,
      description: "Rounding an element.",
      defaultValue: initProps.rounding,
    },
    width: {
      control: "number",
      description: "Button width.",
      defaultValue: initProps.width,
    },
    height: {
      control: "number",
      description: "Button height.",
      defaultValue: initProps.height,
    },
    TAB_reaction: {
      control: "select",
      options: TAB_reactionOptionsKeys,
      description: "Options for styling when focusing with TAB.",
      defaultValue: initProps.TAB_reaction,
    },
    hover_reaction: {
      control: "select",
      options: hover_reactionOptionsKeys,
      description: "Options for styling when hovering.",
      defaultValue: initProps.hover_reaction,
    },
    isLoading: {
      control: "boolean",
      description: "Shows when you are expecting a query result.",
      defaultValue: initProps.isLoading,
    },
    loadingKind: {
      control: "select",
      options: loadingIconsKeys,
      description: "Loading icon kind.",
      defaultValue: initProps.loadingKind,
    },
  },
  args: {
    text: "click",
  },
} satisfies Meta<typeof OnePieceButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        story: "Button without styles.",
      },
    },
  },
};
export const Filled: Story = {
  parameters: {
    docs: {
      description: {
        story: "Simple Filled button.",
      },
    },
  },
  args: {
    kind: "filled",
    rounding: "semicircle",
    initColor: "white",
    initBgcolor: "purple",
  },
};

export const Ghost: Story = {
  parameters: {
    docs: {
      description: {
        story: "Button with initBgcolor background.",
      },
    },
  },
  args: {
    kind: "ghost",
    rounding: "slight",
    initColor: "purple",
    initBgcolor: "white",
  },
};
export const GhostFilling: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Button with initially initBgcolor background, filling with bgcolor on hover.",
      },
    },
  },
  args: {
    kind: "ghost-filling",
    initColor: "purple",
    initBgcolor: "white",
    color: "white",
    bgcolor: "purple",
  },
};

export const Filling: Story = {
  parameters: {
    docs: {
      description: {
        story: "Button that fills on hover.",
      },
    },
  },
  args: {
    kind: "filling",
    rounding: "semicircle",
    initColor: "white",
    initBgcolor: "purple",
  },
};
