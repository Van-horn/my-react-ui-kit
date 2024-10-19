import type { Meta, StoryObj } from "@storybook/react"

import OnePieceButton, { buttons } from "."
import colors from "../../../shared-data-for-styles/colors"
import { roundingOptionsKeys } from "../../../shared-data-for-styles/element-rounding"
import { TAB_reactionOptionsKeys } from "../../../shared-data-for-styles/TAB-on-element/reaction-options"
import { loadingIconsKeys } from "../../../shared-data-for-styles/loading-icons"
import { hover_reactionOptionsKeys } from "./../../../shared-data-for-styles/hover-on-element/reaction-options"

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
		},
		color: {
			control: "select",
			options: colors,
			description: "Button color scheme for transitions.",
		},
		initColor: {
			control: "select",
			options: colors,
			description: "Button color scheme.",
		},
		bgcolor: {
			control: "select",
			options: colors,
			description: "Button background-color scheme for transitions.",
		},
		initBgcolor: {
			control: "select",
			options: colors,
			description: "Button background-color scheme.",
		},
		kind: {
			control: "select",
			options: buttons,
			description: "Button kind.",
		},
		rounding: {
			control: "select",
			options: roundingOptionsKeys,
			description: "Rounding an element.",
		},
		width: {
			control: "number",
			description: "Button width.",
		},
		height: {
			control: "number",
			description: "Button height.",
		},
		TAB_reaction: {
			control: "select",
			options: TAB_reactionOptionsKeys,
			description: "Options for styling when focusing with TAB.",
		},
		hover_reaction: {
			control: "select",
			options: hover_reactionOptionsKeys,
			description: "Options for styling when hovering.",
		},
		isLoading: {
			control: "boolean",
			description: "Shows when you are expecting a query result.",
		},
		loadingKind: {
			control: "select",
			options: loadingIconsKeys,
			description: "Loading icon kind.",
		},
		loadingIconColor: {
			control: "select",
			options: colors,
			description: "Load icon color.",
		},
	},
	args: {
		text: "click",
	},
} satisfies Meta<typeof OnePieceButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	parameters: {
		docs: {
			description: {
				story: "Button without styles.",
			},
		},
	},
}
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
}

export const Ghost: Story = {
	parameters: {
		docs: {
			description: {
				story: "Button with transparent background.",
			},
		},
	},
	args: {
		kind: "ghost",
		rounding: "slight",
		initColor: "purple",
		initBgcolor: "white",
	},
}
export const GhostFilling: Story = {
	parameters: {
		docs: {
			description: {
				story: "Button with initially transparent background, filling on hover.",
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
}

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
}
