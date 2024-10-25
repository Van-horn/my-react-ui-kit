import React, { ButtonHTMLAttributes } from "react";
import { memo, FC } from "react";
import styled from "styled-components";

import ResetCss from "../../../reset";
import buttonKinds from "./index.module.scss";
import {
  I_TAB_reactionOptions,
  TAB_reactionOptions,
} from "../../../shared-data-for-styles/TAB-on-element/reaction-options";
import {
  I_hover_reactionOptions,
  hover_reactionOptions,
} from "../../../shared-data-for-styles/hover-on-element/reaction-options";
import {
  IRoundingOptions,
  roundingOptions,
} from "../../../shared-data-for-styles/element-rounding";
import loadingIcons, {
  ILoadingIcons,
} from "../../../shared-data-for-styles/loading-icons";
import overrideObjProps from "../../../utils/overrideObjProps";

interface SpeciaStyles {
  color: string;
  initColor: string;
  bgcolor: string;
  initBgcolor: string;
  kind: keyof typeof buttonKinds;
  width: number;
  height: number;
  rounding: keyof IRoundingOptions;
  isLoading: boolean;
  loadingKind: keyof ILoadingIcons;
  TAB_reaction: keyof I_TAB_reactionOptions;
  hover_reaction: keyof I_hover_reactionOptions;
}

export interface OnePieceButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    Partial<SpeciaStyles> {
  text: string;
}

const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => prop === "children",
})<SpeciaStyles>`
  ${({
    color,
    initColor,
    bgcolor,
    initBgcolor,
    width,
    height,
    rounding,
    TAB_reaction,
    hover_reaction,
  }) => `
		--initColor : ${initColor};
		--color : ${color};
		--bgcolor : ${bgcolor};
		--initBgcolor : ${initBgcolor};
		
		display: flex;
  		align-items: center;
		justify-content: center;
		border-width: 0.15em; 
		width: ${width}em;
		height: ${height}em;
		font-size: ${height / 2.5}em;
		border-radius: ${height * roundingOptions[rounding]}em;

		&:hover {
			${hover_reactionOptions[hover_reaction]}
		}

		&:focus-visible {
			${TAB_reactionOptions[TAB_reaction]};
		}`}
`;

export const initProps: SpeciaStyles = {
  color: "black",
  initColor: "black",
  bgcolor: "rgb(235, 235, 235)",
  initBgcolor: "rgb(235, 235, 235)",
  width: 6.5,
  height: 2.5,
  kind: "none",
  loadingKind: "none",
  rounding: "none",
  isLoading: false,
  TAB_reaction: "none",
  hover_reaction: "none",
};

const OnePieceButton: FC<OnePieceButtonProps> = memo(({ text, ...props }) => {
  const classes = [
    props?.className ?? "",
    buttonKinds[props?.kind ?? initProps.kind],
  ].join(" ");

  return (
    <>
      <ResetCss />
      <Button
        {...overrideObjProps<SpeciaStyles, Partial<SpeciaStyles>>(
          initProps,
          props
        )}
        className={classes}
      >
        {text}
        {props?.isLoading && props?.loadingKind
          ? loadingIcons[props.loadingKind]
          : loadingIcons[initProps.loadingKind]}
      </Button>
    </>
  );
});

export const buttons = Object.keys(buttonKinds);
export default OnePieceButton;
