// import { ReactElement } from "react"

// import OnePieceInput, { OnePieceInputProps } from "./OnePiece"
// import BorderlessInput, { BorderlessProps } from "./Multi-part/Borderless"
// import HintBorderInput, { HintBorderInputProps } from "./Multi-part/HintBorder"

// interface InputsProps {
// 	one_piece: OnePieceInputProps
// 	borderless: BorderlessProps
// 	hint_border: HintBorderInputProps
// }

// interface Inputs<K extends keyof InputsProps> {
// 	one_piece: ReactElement<InputsProps[K]>
// 	borderless: ReactElement<InputsProps[K]>
// 	hint_border: ReactElement<InputsProps[K]>
// }

// interface GetInputsProps<K extends keyof InputsProps>  InputsProps[K] {
// 	kind: keyof Inputs<K>
// }

// const GetInputs = <K extends keyof InputsProps>(
// 	props: GetInputsProps<K> & InputsProps[K],
// ): Inputs<K> => ({
// 	one_piece: (
// 		<OnePieceInput {...(props as GetInputsProps<K> & InputsProps[K])} />
// 	),
// 	borderless: <BorderlessInput {...props} />,
// 	hint_border: <HintBorderInput {...props} />,
// })

// export default GetInputs
