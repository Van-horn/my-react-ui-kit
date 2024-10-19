import React, { ReactElement } from "react"
import Spinner from "./Spinner"

export interface ILoadingIcons {
	spinner: ReactElement
	dots: string
	none: string
}

const loadingIcons:ILoadingIcons = {
	spinner: <Spinner  />,
	dots : "...",
	none: "",
}  

export default loadingIcons

export const loadingIconsKeys = Object.keys(loadingIcons)
