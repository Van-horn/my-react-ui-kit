export interface IRoundingOptions {
	semicircle: number
	medium: number
	slight: number
	none: number
}

export const roundingOptions: IRoundingOptions = {
	semicircle: 1 / 2,
	medium: 1 / 3,
	slight: 1 / 6,
	none: 0,
}
