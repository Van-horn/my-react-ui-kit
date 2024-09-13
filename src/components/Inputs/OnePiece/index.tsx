import React, { InputHTMLAttributes } from "react"
import { memo, FC } from "react"
import styled from "styled-components"

import ResetCss from "../../../reset.js"
import {
	IRoundingOptions,
	roundingOptions,
} from "../../../shared-data-for-styles/element-rounding"

interface SpeciaStyles {
	themeColor?: string
	invalidColor?: string
	rounding?: keyof IRoundingOptions
}

export interface OnePieceInputProps
	extends InputHTMLAttributes<HTMLInputElement>,
		SpeciaStyles {
	width?: number
	height?: number
}

const Input = styled.input.withConfig({
	shouldForwardProp: (prop) =>
		!["width", "height", "rounding", "invalidColor", "themeColor"].includes(
			prop,
		),
})<OnePieceInputProps>`
	${(props) => `
		border: 0.149em solid ${props?.themeColor ?? "black"};
		padding: 0em 0.5em;
		width: ${props?.width ?? 13}em;
		height: ${props?.height ?? 2.5}em;
		font-size: ${props?.height ? props.height / 2.4 : 1.1}em;
		border-radius: ${props?.height && props?.rounding ? props.height * roundingOptions[props.rounding] : 0}em;
		&:user-invalid {
			border-color: ${props?.invalidColor ?? "red"};
		}
		`}
`

const OnePieceInput: FC<OnePieceInputProps> = memo((props) => {
	const classes = [props?.className ?? ""].join(" ")

	return (
		<>
			<ResetCss />
			<Input {...props} className={classes} />
		</>
	)
})

export default OnePieceInput
