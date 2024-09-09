import React, { InputHTMLAttributes } from "react"
import { memo, FC } from "react"
import styled from "styled-components"

import ResetCss from "../../../reset.js"
import inputKinds from "./OnePieceInput.module.scss"
import {
	I_TAB_reactionOptions,
	TAB_reactionOptions,
} from "../../../shared-data-for-styles/TAB-on-element/reaction-options"
import {
	IRoundingOptions,
	roundingOptions,
} from "../../../shared-data-for-styles/element-rounding"

interface SpeciaStyles {
	themeColor?: string
	kind?: keyof typeof inputKinds
	TAB_reaction?: keyof I_TAB_reactionOptions
	rounding?: keyof IRoundingOptions
}

export interface OnePieceInputProps
	extends InputHTMLAttributes<HTMLInputElement>,
		SpeciaStyles {
	value?: string
	isValid?: boolean
	width?: number
	height?: number
}

const Button = styled.input.withConfig({
	shouldForwardProp: (prop) =>
		![
			"themeColor",
			"kind",
			"TAB_reaction",
			"rounding",
			"isValid",
			"width",
			"height",
		].includes(prop),
})<OnePieceInputProps>`
	${(props) => `
		--theme-color: ${props?.themeColor ?? "black"};
		cursor: pointer;
		width: ${props?.width ?? 6}em;
		height: ${props?.height ?? 2.5}em;
		font-size: ${props?.width ? props.width / 7 + "em" : "17px"};
		border-radius: ${props?.width && props?.rounding ? props.width / roundingOptions[props.rounding] : 0}em;
		&:focus-visible {
			${TAB_reactionOptions[props?.TAB_reaction ?? "none"]};
		}`}
`

const OnePieceInput: FC<OnePieceInputProps> = memo((props) => {
	const classes = [
		props?.className ?? "",
		props?.kind ? inputKinds[props.kind] : inputKinds["none"],
	].join(" ")

	return (
		<>
			<ResetCss />
			<Button {...props} className={classes} type="button" />
		</>
	)
})

export default OnePieceInput
