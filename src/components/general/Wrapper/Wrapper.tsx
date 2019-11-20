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

const Wrapper = React.forwardRef<HTMLDivElement, WrapperProps>(
  ({ children, width = WrapperWidth.Normal, ...props }, ref) => {
    if (width === WrapperWidth.Small) {
      return (
        <SmallWrapper {...props} ref={ref}>
          {children}
        </SmallWrapper>
      );
    }

    return (
      <NormalWrapper {...props} ref={ref}>
        {children}
      </NormalWrapper>
    );
  }
);

export default Wrapper;
