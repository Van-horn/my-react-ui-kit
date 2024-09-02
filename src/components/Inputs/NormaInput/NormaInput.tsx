import React from "react"
import { InputHTMLAttributes, memo, FC } from "react"

import styles from "./NormaInput.module.css"

interface NormaInputProps extends InputHTMLAttributes<HTMLInputElement> {
	value: string
}

const NormaInput: FC<NormaInputProps> = (props) => {
	return <input {...props} />
}

export default memo(NormaInput)
