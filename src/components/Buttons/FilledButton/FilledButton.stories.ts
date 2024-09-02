import type { Meta, StoryObj } from "@storybook/react"

import FilledButton from "./FilledButton"

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
		styles: {
			control: { type: "object" },
			description: "Styles for button.",
			defaultValue: { tabReaction: "none" },
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
	},
	args: {
		label: "click",
		styles: {
			TAB_reaction: "none",
			hover_reaction: "none",
		},
	},
} satisfies Meta<typeof FilledButton>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
	args: {},
}
export const Normal2: Story = {
	args: {},
}

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
