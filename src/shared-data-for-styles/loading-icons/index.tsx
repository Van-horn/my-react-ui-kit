import React, { ReactElement } from "react"
import Spinner from "./Spinner/Spinner"

export interface ILoadingIcons {
	spinner: ReactElement
	dots: string
	none: string
}

const loadingIcons = {
	spinner: <Spinner  />,
	dots : "...",
	none: "",
} satisfies ILoadingIcons

export default loadingIcons

export const loadingIconsKeys = Object.keys(loadingIcons)
