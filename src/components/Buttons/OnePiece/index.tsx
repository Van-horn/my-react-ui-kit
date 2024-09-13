import React, { ButtonHTMLAttributes } from "react"
import { memo, FC } from "react"
import styled from "styled-components"

import ResetCss from "../../../reset.js"
import buttonKinds from "./index.module.scss" 
import {
	I_TAB_reactionOptions,
	TAB_reactionOptions,
} from "../../../shared-data-for-styles/TAB-on-element/reaction-options"
import {
	I_hover_reactionOptions,
	hover_reactionOptions,
} from "../../../shared-data-for-styles/hover-on-element/reaction-options"
import {
	IRoundingOptions,
	roundingOptions,
} from "../../../shared-data-for-styles/element-rounding"

interface SpeciaStyles {
	themeColor?: string
	kind?: "ghost" | "filled" | "filling" | "ghost-filling" | "none"
	TAB_reaction?: keyof I_TAB_reactionOptions
	hover_reaction?: keyof I_hover_reactionOptions
	rounding?: keyof IRoundingOptions
	width?: number
	height?: number
}

export interface OnePieceButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		SpeciaStyles {
	text: string
}

const Button = styled.button.withConfig({
	shouldForwardProp: (prop) => prop === "children",
})<SpeciaStyles>`
	${(props) => `
		--theme-color: ${props?.themeColor ?? "black"};
		width: ${props?.width ?? 7}em;
		height: ${props?.height ?? 3}em;
		font-size: ${props?.height ? props.height / 2.7 : 1.1}em;
		border-radius: ${props?.height && props?.rounding ? props.height * roundingOptions[props.rounding] : 0}em;

		&:hover {
			${hover_reactionOptions[props?.hover_reaction ?? "none"]}
		}

		&:focus-visible {
			${TAB_reactionOptions[props?.TAB_reaction ?? "none"]};
		}`}
`

const OnePieceButton: FC<OnePieceButtonProps> = memo(({ text, ...props }) => {
	const classes = [
		props?.className ?? "",
		buttonKinds[props?.kind ?? "none"],
	].join(" ")

	return (
		<>
			<ResetCss />
			<Button {...props} className={classes}>
				{text}
			</Button>
		</>
	)
})

export default OnePieceButton
