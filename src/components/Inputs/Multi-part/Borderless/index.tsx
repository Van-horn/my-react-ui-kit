import React, { InputHTMLAttributes } from "react"
import { memo, FC } from "react"
import styled from "styled-components"

import ResetCss from "../../../../reset"

interface SpeciaStyles {
	themeColor?: string
	invalidColor?: string
}

export interface BorderlessProps
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
	width: ${props.width}em;
	height: ${props.height}em; 
`}
`

const Input = styled.input.withConfig({
	shouldForwardProp: (prop) =>
		!["width", "height", "invalidColor", "themeColor"].includes(prop),
})<BorderlessProps>`
	${(props) => `
		border: none ;
		width: 100%;
		height: 100%;
		border-radius: 0;
		background-color: transparent;
		border-bottom: 0.149em solid ${props?.themeColor ?? "black"};
		font-size: ${props?.height ? props.height / 2.4 : 1.1}em;
		&:user-invalid {
			border-color: ${props?.invalidColor ?? "red"};
		}
		&:not(:placeholder-shown) + label{
			visibility: visible;
			top: -0.7em;
			left: -0.05em;  
			transform: scale(0.95);
			opacity: 1;
			transition: all 0.23s ease, opacity 0.1s ease;
		}
		`}
`

const Label = styled.label.withConfig({
	shouldForwardProp: (prop) => prop === "children",
})<LabelProps>`
	${(props) => `
		position: absolute;
		visibility: hidden;
		left : -0.05em;
		top: 0.59em;
		transform: scale(1);
		opacity: 0;
		color: ${props.themeColor};
		font-size: ${props.height}em;
		`}
`

const BorderlessInput: FC<BorderlessProps> = memo((props) => {
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

export default BorderlessInput
