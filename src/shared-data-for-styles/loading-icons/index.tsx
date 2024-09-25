import React, { FC } from "react"
import Spinner, { SpinnerProps } from "./Spinner/Spinner"

export interface ILoadingIcons {
	spinner: FC<SpinnerProps>
	none: () => string
}

const loadingIcons = {
	spinner: (props) => <Spinner {...props} />,
	none: () => "",
} satisfies ILoadingIcons

export default loadingIcons

export const loadingIconsKeys = Object.keys(loadingIcons)
