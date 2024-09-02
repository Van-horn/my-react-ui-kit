import { css, Interpolation } from "styled-components"

export interface I_hover_reactionOptions {
	blackout: Interpolation<Record<never, never>>
	none: Interpolation<Record<never, never>>
}

export const hover_reactionOptions: I_hover_reactionOptions = {
	blackout: css`
		// filter: background-color: rgba(0, 0, 0, 0.01);
	`,
	none: css``,
}
