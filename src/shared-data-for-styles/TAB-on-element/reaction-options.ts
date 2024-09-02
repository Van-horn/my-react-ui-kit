import { css, Interpolation } from "styled-components"

export interface I_TAB_reactionOptions {
	zoom: Interpolation<Record<never, never>>
	none: Interpolation<Record<never, never>>
}

export const TAB_reactionOptions: I_TAB_reactionOptions = {
	zoom: css`
		outline: none;
		transform: scale(1.1);
	`,
	none: css`
		outline: none;
	`,
}
