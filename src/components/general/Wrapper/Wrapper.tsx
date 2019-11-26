import React from "react";
import { NormalWrapper, SmallWrapper, SmallerWrapper } from "./styled";

export enum WrapperWidth {
  Normal,
  Small,
  Smaller
}

type WrapperProps = {
  children: React.ReactNode;
  className?: string;
  width?: WrapperWidth;
};

const Wrapper = React.forwardRef<HTMLDivElement, WrapperProps>(
  ({ children, width = WrapperWidth.Normal, ...props }, ref) => {
    if (width === WrapperWidth.Smaller) {
      return (
        <SmallerWrapper {...props} ref={ref}>
          {children}
        </SmallerWrapper>
      );
    }

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
