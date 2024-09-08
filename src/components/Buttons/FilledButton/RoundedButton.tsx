import React, { InputHTMLAttributes } from "react"
import { memo, FC } from "react"
import styled from "styled-components"

import ResetCss from "../../../reset.js"
import buttonKinds from "./RoundedButton.module.scss"
import {
	I_TAB_reactionOptions,
	TAB_reactionOptions,
} from "../../../shared-data-for-styles/TAB-on-element/reaction-options"
// import {
// 	I_hover_reactionOptions,
// 	hover_reactionOptions,
// } from "../../../shared-data-for-styles/hover-on-element/reaction-options"

interface SpeciaStyles {
	themeColor?: string
	kind?: keyof typeof buttonKinds
	TAB_reaction?: keyof I_TAB_reactionOptions
}

export interface RoundedButtonProps
	extends InputHTMLAttributes<HTMLInputElement>,
		SpeciaStyles {
	value: string
	width?: number
	height?: number
}

const Button = styled.input.withConfig({
	shouldForwardProp: (prop) =>
		!["themeColor", "kind", "TAB_reaction", "width"].includes(prop),
})<RoundedButtonProps>`
	${(props) => `
		--theme-color: ${props?.themeColor ?? "black"};
		cursor: pointer;
		width: ${props?.width ?? 6}em;
		height: ${props?.height ?? 2.5}em;
		font-size: ${props?.width ? props.width / 6 + "em" : "17px"};
		border-radius: ${props?.width ? props.width / 2 : 4}em;
		&:focus-visible {
			${TAB_reactionOptions[props?.TAB_reaction ?? "none"]};
		}`}
`

const RoundedButton: FC<RoundedButtonProps> = memo((props) => {
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

export default RoundedButton
