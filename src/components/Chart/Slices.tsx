import React, { useContext } from "react";
import { PieContext } from "./Pie";

type SlicesProps = {
  children: React.ReactNode[];
  hueShift?: number;
};

const Slices: React.FC<SlicesProps> = ({ children, hueShift, ...props }) => {
  const pieContext = useContext(PieContext);

  if (hueShift) {
    pieContext.hue = hueShift;
  }

  // Sum slice values to get total value for slice
  let total = 0;

  React.Children.forEach(
    children,
    (child: any) => (total += child.props.value)
  );

  pieContext.total = total;

  return (
    <svg viewBox="-1 -1 2 2" {...props}>
      <g transform="rotate(-90)">{children}</g>
    </svg>
  );
};

export default Slices;
