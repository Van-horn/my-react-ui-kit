import React, { InputHTMLAttributes } from "react"
import { memo, FC } from "react"
import styled from "styled-components"

import ResetCss from "../../../reset.js"
import buttonKinds from "./OnePieceButton.module.scss"
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
	kind?: keyof typeof buttonKinds
	TAB_reaction?: keyof I_TAB_reactionOptions
	rounding?: keyof IRoundingOptions
}

export interface OnePieceButtonProps
	extends InputHTMLAttributes<HTMLInputElement>,
		SpeciaStyles {
	value: string
	width?: number
	height?: number
}

const Button = styled.input.withConfig({
	shouldForwardProp: (prop) =>
		![
			"themeColor",
			"kind",
			"TAB_reaction",
			"width",
			"height",
			"rounding",
		].includes(prop),
})<OnePieceButtonProps>`
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

const OnePieceButton: FC<OnePieceButtonProps> = memo((props) => {
	const classes = [
		props?.className ?? "",
		props?.kind ? buttonKinds[props.kind] : buttonKinds["none"],
	].join(" ")

	return (
		<>
			<ResetCss />
			<Button {...props} className={classes} type="button" />
		</>
	)
})

export default OnePieceButton
