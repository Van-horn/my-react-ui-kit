import React from "react"
import { ButtonHTMLAttributes, memo, FC, CSSProperties } from "react"
import styled from "styled-components"

import buttonKinds from "./RoundedButton.module.scss"
import {
	I_TAB_reactionOptions,
	TAB_reactionOptions,
} from "../../../shared-data-for-styles/TAB-on-element/reaction-options"
import {
	I_hover_reactionOptions,
	hover_reactionOptions,
} from "../../../shared-data-for-styles/hover-on-element/reaction-options"

interface speciaStyles {
	hover_reaction?: keyof I_hover_reactionOptions
	TAB_reaction?: keyof I_TAB_reactionOptions
}

export interface FilledButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		speciaStyles {
	label: string
	backgroundColor?: string
	textColor?: string
	kind?: keyof typeof buttonKinds
}

const Button = styled.button.withConfig({
	shouldForwardProp: (prop) =>
		prop !== "label" ||
		prop in ({} as ButtonHTMLAttributes<HTMLButtonElement>),
})<FilledButtonProps>`
	${(props) => `
	cursor: pointer;


	color: ${props?.textColor ?? "initial"}
	background-color: ${props?.backgroundColor ?? "initial"}

	&:hover {
		${hover_reactionOptions[props?.hover_reaction ?? "none"]}
	}
	&:focus-visible {
		${TAB_reactionOptions[props?.TAB_reaction ?? "none"]}
	}`}
`

const FilledButton: FC<FilledButtonProps> = (props) => {
	const classes = [
		props?.className ?? "",
		props?.kind ? buttonKinds[props.kind] : "",
	].join(" ")
	return (
		<Button {...props} className={classes}>
			{props.label}
		</Button>
	)
}

export default memo(FilledButton)
