import React from "react"
import { ButtonHTMLAttributes, memo, FC } from "react"

import styles from "./FilledButton.module.css"

interface FilledButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const FilledButton: FC<FilledButtonProps> = (props) => {
	const allClasses: string[] = [styles.button, props?.className ?? ""]
	return <button {...props} className={allClasses.join(" ")} />
}

export default memo(FilledButton)
