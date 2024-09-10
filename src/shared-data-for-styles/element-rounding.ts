export interface IRoundingOptions {
	semicircle: number
	medium: number
	slight: number
	none: number
}

export const roundingOptions: IRoundingOptions = {
	semicircle: 1 / 2,
	medium: 1 / 7,
	slight: 1 / 20,
	none: 0,
}
