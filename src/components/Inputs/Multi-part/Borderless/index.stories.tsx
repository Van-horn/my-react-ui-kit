import React, { ChangeEvent, FC, useCallback, useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"

import Template, { BorderlessProps } from "."

const BorderlessInput: FC<BorderlessProps> = (props) => {
	const [value, setValue] = useState<string>("")
	const handleSetValue = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => setValue(() => e.target.value),
		[],
	)
	return (
		<Template required value={value} onChange={handleSetValue} {...props} />
	)
}

const meta = {
	title: "Inputs/MultiPartInputs/Borderless",
	component: BorderlessInput,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs", "wip"],
	argTypes: {
		themeColor: {
			control: "select",
			options: ["purple", "orange", "green", "cornflowerblue", "black"],
			description: "Input color scheme.",
			defaultValue: "black",
		},
		invalidColor: {
			control: "text",
			description: "Color, when input is invalid.",
			defaultValue: "red",
		},
		width: {
			control: "number",
			description: "Input width.",
			defaultValue: 13,
		},
		height: {
			control: "number",
			description: "Input height.",
			defaultValue: 2.5,
		},
	},
	args: {},
} satisfies Meta<BorderlessProps>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	parameters: {
		docs: {
			description: {
				story: "Input without styles.",
			},
		},
	},
}

export const Stylized: Story = {
	parameters: {
		docs: {
			description: {
				story: "Added some styles.",
			},
		},
	},
	args: {
		themeColor: "purple",
		invalidColor: "orange",
		placeholder: "login",
		width: 13,
		height: 2.5,
	},
}
