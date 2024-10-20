import React, { ChangeEvent, FC, useCallback, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Template, { initProps, OnePieceInputProps } from ".";
import { roundingOptionsKeys } from "../../../shared-data-for-styles/element-rounding";
import colors from "../../../shared-data-for-styles/colors";
import { iconsForInputKeys } from "../../../shared-data-for-styles/icons-for-input";

const OnePieceInput: FC<Partial<OnePieceInputProps>> = (props) => {
   const [value, setValue] = useState<string>("");
   const [iconState, setIconState] = useState<boolean>(true);

   const handleSetValue = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => setValue(() => e.target.value),
      [],
   );
   const handleIconClick = useCallback(() => {
      setIconState((prev) => !prev);
   }, []);
   return (
      <Template
         required
         type={props?.icon && iconState ? "password" : "text"}
         value={value}
         onChange={handleSetValue}
         iconState={iconState}
         onIconClick={handleIconClick}
         {...props}
      />
   );
};
const meta = {
   title: "Inputs/OnePieceInputs",
   component: OnePieceInput,
   parameters: {
      layout: "centered",
   },
   tags: ["autodocs", "wip"],
   argTypes: {
      themeColor: {
         control: "select",
         options: colors,
         description: "Input color scheme.",
         defaultValue: initProps.themeColor,
      },
      invalidColor: {
         control: "text",
         description: "Color, when input is invalid.",
         defaultValue: initProps.invalidColor,
      },
      rounding: {
         control: "select",
         options: roundingOptionsKeys,
         description: "Rounding an element.",
         defaultValue: initProps.rounding,
      },
      width: {
         control: "number",
         description: "Input width.",
         defaultValue: initProps.width,
      },
      height: {
         control: "number",
         description: "Input height.",
         defaultValue: initProps.width,
      },
      icon: {
         control: "select",
         options: iconsForInputKeys,
         description: "Icons.",
         defaultValue: initProps.icon,
      },
      iconState: {
         control: "boolean",
         description: "Icon state.",
         defaultValue: initProps.iconState,
      },
      onIconClick: {
         description: "Icon click handler.",
      },
   },
   args: {},
} satisfies Meta<typeof OnePieceInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
   parameters: {
      docs: {
         description: {
            story: "Input without styles.",
         },
      },
   },
};

export const Stylized: Story = {
   parameters: {
      docs: {
         description: {
            story: "Added some styles.",
         },
      },
   },
   args: {
      themeColor: "purple",
      invalidColor: "rgb(237, 79, 79)",
      placeholder: "write...",
      rounding: "semicircle",
   },
};

export const Password: Story = {
   parameters: {
      docs: {
         description: {
            story: "Input for password.",
         },
      },
   },
   args: {
      themeColor: "purple",
      icon: "passwordEye",
      placeholder: "write...",
   },
};
