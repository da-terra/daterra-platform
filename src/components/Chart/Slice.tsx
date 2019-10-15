import React, { useContext } from "react";
import { PieContext } from "./Pie";

export type SliceProps = {
  value: number;
  label: string;
  fill?: string;
};

const fullCircle = 2 * Math.PI;

const getCoordinatesForPercentage = (percentage: number) => [
  Math.cos(fullCircle * percentage),
  Math.sin(fullCircle * percentage)
];

const Slice: React.FC<SliceProps> = ({
  value,
  fill,
  label,
  children,
  ...props
}) => {
  const pieContext = useContext(PieContext);

  // Slice arc ends at previous slice
  const [startX, startY] = getCoordinatesForPercentage(pieContext.progress);

  const percentageValue = value / pieContext.total;

  // Add slice to pie progress
  pieContext.progress += percentageValue;

  // Slice arc ends at new pie progress
  const [endX, endY] = getCoordinatesForPercentage(pieContext.progress);

  // Arc rotation fill direction
  const largeArcFlag = percentageValue > 0.5 ? 1 : 0;

  // Increase hue
  pieContext.hue += percentageValue * 360;

  // Fallback color for the fill attribute
  const fillColor = fill || `hsl(${pieContext.hue}, 100%, 70%)`;

  // Add slice values to pie context
  pieContext.slices.push({
    color: fillColor,
    label
  });

  // Pie slice shape
  const shape = `M ${startX} ${startY} A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY} L 0 0`;

  return (
    <path {...props} fill={fillColor} d={shape}>
      <title>{label}</title>
    </path>
  );
};

export default Slice;
