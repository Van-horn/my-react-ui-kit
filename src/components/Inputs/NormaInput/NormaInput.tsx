import React from "react"
import { InputHTMLAttributes, memo, FC } from "react"

import styles from "./NormaInput.module.css"

interface NormaInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const NormaInput: FC<NormaInputProps> = (props) => {
	const allClasses: string[] = [styles.input, props?.className ?? ""]

	return <input {...props} className={allClasses.join(" ")} />
}

export default memo(NormaInput)
