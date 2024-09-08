import React, { FC } from "react"
import type { Meta, StoryObj } from "@storybook/react"

import RoundedButton from "./RoundedButton"

const meta = {
	title: "Buttons/RoundedButton",
	component: RoundedButton,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs", "wip"],
	argTypes: {
		value: {
			required: true,
			description: "Text in button.",
			control: "text",
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
			options: ["ghost", "none"],
			description: "Button type.",
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
	},
	args: {
		value: "click",
	},
} satisfies Meta<typeof RoundedButton>

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
		kind: "ghost",
		width: 6,
		height: 2.5,
		TAB_reaction: "zoom",
	},
}

// export const Normal2: Story = {
// 	args: {},
// }

// export const Secondary: Story = {
// 	args: {
// 		label: "Button",
// 	},
// }

// export const Large: Story = {
// 	args: {
// 		size: "large",
// 		label: "Button",
// 	},
// }

// export const Small: Story = {
// 	args: {
// 		size: "small",
// 		label: "Button",
// 	},
// }
