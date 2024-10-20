import { lazy } from "react"

const OnePieceButton =lazy(()=>import("./components/Buttons/OnePiece")) 
const OnePieceInput =lazy(()=>import("./components/Inputs/OnePiece")) 
const HintBorderInput =lazy(()=>import("./components/Inputs/Multi-part/HintBorder")) 
const BorderlessInput =lazy(()=>import("./components/Inputs/Multi-part/Borderless")) 

export { OnePieceButton, OnePieceInput, HintBorderInput, BorderlessInput }
