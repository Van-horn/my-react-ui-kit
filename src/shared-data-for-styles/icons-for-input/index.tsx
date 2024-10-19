import React, { MouseEventHandler, ReactElement } from "react"
import PasswordEye from "./Password"

export interface IconsProps{
    iconState : boolean
	onIconClick : MouseEventHandler
}

export interface IIconsForInput {
	passwordEye : (props: IconsProps) => ReactElement<IconsProps>
	none : (props: IconsProps) => ""
}

const IconsForInput : IIconsForInput = {
	passwordEye : (props) => <PasswordEye {...props} />,
	none : (props) => ""
}
	


export default IconsForInput

export const iconsForInputKeys = Object.keys(IconsForInput)
