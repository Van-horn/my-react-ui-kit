import { FC } from "react"
import type { Meta, StoryObj } from "@storybook/react"

import FilledButton from "./RoundedButton"

const meta = {
	title: "Buttons/FilledButton",
	component: FilledButton,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs", "wip"],
	argTypes: {
		label: {
			required: true,
			description: "Text in button.",
			defaultValue: "click",
			control: "text",
		},
		hover_reaction: {
			control: {
				type: "select",
			},
			options: ["none", "zwed"],
			description: "Reaction when hovering over the button.",
		},
	},

	// style: {
	// 	tabReaction: {
	// 		control: {
	// 			type: "select",
	// 			options: ["zoom", "none"],
	// 		},
	// 		description: "Options for styling when focusing with TAB.",
	// 	},
	// },

	args: {
		label: "clicksss",
		hover_reaction: "none",
	},
} satisfies Meta<typeof FilledButton>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
	args: {},
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
