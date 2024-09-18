import React, { FC, HTMLAttributes } from "react"
import { ImSpinner6 } from "react-icons/im"

import styles from "./spinner.module.css"
import styled from "styled-components"

export interface SpinnerProps extends HTMLAttributes<SVGAngle> {
	color: string
}

const StyledSpinner = styled(ImSpinner6).withConfig({
	shouldForwardProp: (prop) => true,
})<SpinnerProps>`
	${({ color }) => `
	position: absolute;
	font-size: inherit;
	top: calc(50% - 0.5em);
	color: ${color};
`}
`

const Spinner: FC<SpinnerProps> = (props) => {
	return <StyledSpinner {...props} className={styles.rotate} />
}

export default Spinner
