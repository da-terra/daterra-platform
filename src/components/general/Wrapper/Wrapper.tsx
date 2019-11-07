import React from "react";
import { NormalWrapper, SmallWrapper } from "./styled";

export enum WrapperWidth {
  Normal,
  Small
}

type WrapperProps = {
  children: React.ReactNode;
  className?: string;
  width?: WrapperWidth;
};

const Wrapper: React.FC<WrapperProps> = ({
  children,
  width = WrapperWidth.Normal,
  ...props
}) => {
  if (width === WrapperWidth.Small) {
    return <SmallWrapper {...props}>{children}</SmallWrapper>;
  }

  return <NormalWrapper {...props}>{children}</NormalWrapper>;
};

export default Wrapper;
