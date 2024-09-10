import type { Meta, StoryObj } from "@storybook/react"

import OnePieceButton from "."

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
			options: ["purple", "orange", "green", "cornflowerblue", "black"],
			description: "Button color scheme.",
			defaultValue: "black",
		},
		kind: {
			control: "select",
			options: ["ghost", "filled", "none"],
			description: "Button type.",
			defaultValue: "none",
		},
		rounding: {
			control: "select",
			options: ["semicircle", "medium", "slight", "none"],
			description:
				"Rounding an element. It works only, when you indicated button height.",
			defaultValue: "none",
		},
		width: {
			control: "number",
			description: "Button width.",
			defaultValue: 6,
		},
		height: {
			control: "number",
			description: "Button height.",
			defaultValue: 2.5,
		},
		TAB_reaction: {
			control: "select",
			options: ["zoom", "none"],
			description: "Options for styling when focusing with TAB.",
			defaultValue: "none",
		},
		hover_reaction: {
			control: "select",
			options: ["blackout", "lightening", "none"],
			description: "Options for styling when hovering.",
			defaultValue: "none",
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
		width: 7,
		height: 3,
		TAB_reaction: "zoom",
		hover_reaction: "lightening",
	},
}

export const Ghost: Story = {
	parameters: {
		docs: {
			description: {
				story: "Button with initially transparent background.",
			},
		},
	},
	args: {
		themeColor: "purple",
		rounding: "medium",
		kind: "ghost",
		width: 7,
		height: 3,
		TAB_reaction: "zoom",
	},
}
