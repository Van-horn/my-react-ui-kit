import React from "react"
import { ButtonHTMLAttributes, memo, FC } from "react"
import styled from "styled-components"

import {
	I_TAB_reactionOptions,
	TAB_reactionOptions,
} from "../../../shared-data-for-styles/TAB-on-element/reaction-options"
import {
	I_hover_reactionOptions,
	hover_reactionOptions,
} from "../../../shared-data-for-styles/hover-on-element/reaction-options"

namespace IButtonStyles {
	export interface IStyles extends React.CSSProperties {
		hover_reaction?: keyof I_hover_reactionOptions
		TAB_reaction?: keyof I_TAB_reactionOptions
	}
}

export interface FilledButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	label: string
	styles?: IButtonStyles.IStyles
}

const Button = styled.button.withConfig({
	shouldForwardProp: (prop) => !["styles", "label"].includes(prop),
})<FilledButtonProps>`
	cursor: pointer;
	color: inherit;
	&:hover {
		${(props) =>
			hover_reactionOptions[props?.styles?.hover_reaction ?? "none"]}
	}

	&:focus-visible {
		${(props) => TAB_reactionOptions[props?.styles?.TAB_reaction ?? "none"]}
	}
`

const FilledButton: FC<FilledButtonProps> = (props) => {
	return <Button {...props}>{props.label}</Button>
}

export default memo(FilledButton)