import React, { InputHTMLAttributes, MouseEventHandler } from "react";
import { memo, FC } from "react";
import styled from "styled-components";

import ResetCss from "../../../reset";
import {
   IRoundingOptions,
   roundingOptions,
} from "../../../shared-data-for-styles/element-rounding";
import overrideObjProps from "../../../utils/overrideObjProps";
import IconsForInput, {
   IIconsForInput,
} from "../../../shared-data-for-styles/icons-for-input";

interface SpeciaStyles {
   themeColor: string;
   invalidColor: string;
   rounding: keyof IRoundingOptions;
   width: number;
   height: number;
   icon: keyof IIconsForInput;
   iconState: boolean;
   onIconClick: MouseEventHandler;
}

export interface OnePieceInputProps
   extends InputHTMLAttributes<HTMLInputElement>,
      SpeciaStyles {
   width: number;
   height: number;
}

const initProps: SpeciaStyles = {
   themeColor: "rgb(200, 200, 200)",
   invalidColor: "red",
   rounding: "none",
   width: 13,
   height: 2.5,
   icon: "none",
   iconState: false,
   onIconClick: () => {},
};

const StyledDiv = styled.div.withConfig({
   shouldForwardProp: (prop) => !Object.keys(initProps).includes(prop),
})<SpeciaStyles>`
   ${({ height, themeColor }) => `
		position: relative;
		display: flex;
  		align-items: safe center;
		color: ${themeColor};
		font-size: ${height / 2.5}em;
	`}
`;

const Input = styled.input.withConfig({
   shouldForwardProp: (prop) => !Object.keys(initProps).includes(prop),
})<SpeciaStyles>`
   ${({ themeColor, width, height, rounding, invalidColor, icon }) => `
		padding: 0em 0.5em;
		font-size: inherit;
		height: ${height}em;
		padding-right: ${icon !== initProps.icon ? 2.7 : 0.5}em;
		border: 0.15em solid ${themeColor};
		width: ${width}em;
		border-radius: ${height * roundingOptions[rounding]}em;

		&:user-invalid {
			border-color: ${invalidColor};
		}
		`}
`;

const OnePieceInput: FC<Partial<OnePieceInputProps>> = memo((props) => {
   const classes = [props?.className ?? ""].join(" ");

   const processedProps = overrideObjProps<SpeciaStyles, Partial<SpeciaStyles>>(
      initProps,
      props,
   );

   return (
      <>
         <ResetCss />
         <StyledDiv {...processedProps}>
            <Input {...processedProps} className={classes} />
            {props?.icon
               ? IconsForInput[props.icon]({
                    iconState: props?.iconState ?? initProps.iconState,
                    onIconClick: props?.onIconClick ?? initProps.onIconClick,
                 })
               : IconsForInput[initProps.icon]({
                    iconState: initProps.iconState,
                    onIconClick: initProps.onIconClick,
                 })}
         </StyledDiv>
      </>
   );
});

export default OnePieceInput;
