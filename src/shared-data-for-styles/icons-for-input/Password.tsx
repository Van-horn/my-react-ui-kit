import React, { FC } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import styled from "styled-components";

import { IconsProps } from ".";

const StyledBsEyeSlash = styled(BsEyeSlash)<Record<never, never>>`
   font: inherit;
   font-size: 115%;
   position: absolute;
   right: 1em;
   cursor: pointer;
`;
const StyledBsEye = styled(BsEye)<Record<never, never>>`
   font: inherit;
   font-size: 115%;
   position: absolute;
   right: 1em;
   cursor: pointer;
`;

const Spinner: FC<IconsProps> = ({ iconState, onIconClick }) => {
   return iconState ? (
      <StyledBsEyeSlash onClick={onIconClick} />
   ) : (
      <StyledBsEye onClick={onIconClick} />
   );
};

export default Spinner;
