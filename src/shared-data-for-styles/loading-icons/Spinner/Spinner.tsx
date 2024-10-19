import React, { FC } from "react"
import { ImSpinner6 } from "react-icons/im"

import styles from "./spinner.module.css"
import styled from "styled-components"

const StyledSpinner = styled(ImSpinner6)<Record<never,never>>`
	margin-left: 0.25em;
`

const Spinner: FC = () => {
	return <StyledSpinner className={styles.rotate} />
}

export default Spinner
