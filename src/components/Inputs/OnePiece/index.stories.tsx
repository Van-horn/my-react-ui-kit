import React, { ChangeEvent, FC, useCallback, useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"

import Template, { OnePieceInputProps } from "."
import {
	roundingOptions,
	roundingOptionsKeys,
} from "../../../shared-data-for-styles/element-rounding"
import colors from "../../shared/colors"

const OnePieceInput: FC<OnePieceInputProps> = (props) => {
	const [value, setValue] = useState<string>("")
	const handleSetValue = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => setValue(() => e.target.value),
		[],
	)
	return (
		<Template
			required
			placeholder="write..."
			value={value}
			onChange={handleSetValue}
			{...props}
		/>
	)
}

const meta = {
	title: "Inputs/OnePieceInputs",
	component: OnePieceInput,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs", "wip"],
	argTypes: {
		themeColor: {
			control: "select",
			options: colors,
			description: "Input color scheme.",
			defaultValue: "black",
		},
		invalidColor: {
			control: "text",
			description: "Color, when input is invalid.",
			defaultValue: "red",
		},
		rounding: {
			control: "select",
			options: roundingOptionsKeys,
			description:
				"Rounding an element. It works only, when you indicated input height.",
			defaultValue: "none",
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
} satisfies Meta<OnePieceInputProps>

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
		rounding: "semicircle",
		width: 13,
		height: 2.5,
	},
}
