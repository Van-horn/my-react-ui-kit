import React, { FC } from "react"
import Spinner, { SpinnerProps } from "./Spinner/Spinner"

export interface ILoadingIcons {
	spinner: FC<SpinnerProps>
	none: () => string
}

export default {
	spinner: (props) => <Spinner {...props} />,
	none: () => "",
} satisfies ILoadingIcons
