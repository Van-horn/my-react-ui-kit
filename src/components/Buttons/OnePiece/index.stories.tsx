import type { Meta, StoryObj } from "@storybook/react"

import OnePieceButton, { buttons } from "."
import colors from "../../shared/colors"
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
			defaultValue: "click",
		},
		themeColor: {
			control: "select",
			options: colors,
			description: "Button color scheme.",
			defaultValue: "black",
		},
		kind: {
			control: "select",
			options: buttons,
			description: "Button type.",
			defaultValue: "none",
		},
		rounding: {
			control: "select",
			options: roundingOptionsKeys,
			description:
				"Rounding an element. It works only, when you indicated button height.",
			defaultValue: "none",
		},
		width: {
			control: "number",
			description: "Button width.",
			defaultValue: 6.5,
		},
		height: {
			control: "number",
			description: "Button height.",
			defaultValue: 2.5,
		},
		TAB_reaction: {
			control: "select",
			options: TAB_reactionOptionsKeys,
			description: "Options for styling when focusing with TAB.",
			defaultValue: "none",
		},
		hover_reaction: {
			control: "select",
			options: hover_reactionOptionsKeys,
			description: "Options for styling when hovering.",
			defaultValue: "none",
		},
		isLoading: {
			control: "boolean",
			description: "Shows when you are expecting a query result.",
			defaultValue: "false",
		},
		loadingKind: {
			control: "select",
			options: loadingIconsKeys,
			description: "Loading icon kind.",
			defaultValue: "none",
		},
		loadingIconColor: {
			control: "select",
			options: colors,
			description: "Load icon color.",
			defaultValue: "black",
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
		themeColor: "purple",
		rounding: "slight",
		kind: "filled",
		width: 6.5,
		height: 2.5,
		TAB_reaction: "zoom",
		hover_reaction: "lightening",
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
		themeColor: "purple",
		rounding: "medium",
		kind: "ghost",
		width: 6.5,
		height: 2.5,
		TAB_reaction: "zoom",
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
		themeColor: "purple",
		rounding: "medium",
		kind: "ghost-filling",
		width: 6.5,
		height: 2.5,
		TAB_reaction: "zoom",
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
		themeColor: "purple",
		rounding: "semicircle",
		kind: "filling",
		width: 6.5,
		height: 2.5,
	},
}
