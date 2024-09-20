import React, { InputHTMLAttributes } from "react"
import { memo, FC } from "react"
import styled from "styled-components"

import ResetCss from "../../../../reset"
import {
	IRoundingOptions,
	roundingOptions,
} from "../../../../shared-data-for-styles/element-rounding"

interface SpeciaStyles {
	themeColor?: string
	invalidColor?: string
	rounding?: keyof IRoundingOptions
}

export interface HintBorderInputProps
	extends InputHTMLAttributes<HTMLInputElement>,
		SpeciaStyles {
	width?: number
	height?: number
}

interface DivProps {
	width: number
	height: number
}
interface LabelProps {
	themeColor: string
	height: number
}

const Div = styled.div.withConfig({
	shouldForwardProp: (prop) => prop === "children",
})<DivProps>`
	${(props) => `
	position: relative;
	width: ${props?.width ?? 13}em;
	height: ${props?.height ?? 2.5}em; 
`}
`

const Input = styled.input.withConfig({
	shouldForwardProp: (prop) =>
		!["width", "height", "rounding", "invalidColor", "themeColor"].includes(
			prop,
		),
})<HintBorderInputProps>`
	${(props) => `
		border: 0.149em solid ${props?.themeColor ?? "black"};
		padding: 0em 0.5em;
		width: 100%;
		height: 100%;
		font-size: ${props?.height ? props.height / 2.4 : 1.1}em;
		border-radius: ${props?.height && props?.rounding ? props.height * roundingOptions[props.rounding] : 0}em;
		&:user-invalid {
			border-color: ${props?.invalidColor ?? "red"};
		}
		&:not(:placeholder-shown) + label{
			visibility: visible;
			top: -0.56em;
			left: 1.4em;  
			transform: scale(0.95);
			opacity: 1;
			background-color: white;
			border: 0.11em solid white;
			border-top: none;
			border-bottom: none;
			transition: all 0.23s ease, opacity 0.1s ease, border 1ms ease;
		}
		`}
`

const Label = styled.label.withConfig({
	shouldForwardProp: (prop) => prop === "children",
})<LabelProps>`
	${(props) => `
		position: absolute;
		visibility: hidden;
		left : 0.64em;
		top: 0.59em;
		transform: scale(1);
		opacity: 0;
		color: ${props.themeColor};
		font-size: ${props.height}em;
		`}
`

const HintBorderInput: FC<HintBorderInputProps> = memo((props) => {
	const classes = [props?.className ?? ""].join(" ")

	return (
		<>
			<ResetCss />
			<Div width={props?.width ?? 13} height={props?.height ?? 2.5}>
				<Input {...props} className={classes} />
				<Label
					themeColor={props?.themeColor ?? "black"}
					height={props?.height ? props.height / 2.3 : 1.1}>
					{props?.placeholder ?? ""}
				</Label>
			</Div>
		</>
	)
})

export default HintBorderInput
