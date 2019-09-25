import React, { useContext } from "react";
import { CanvasContext } from "./Chart";
import { PieContext } from "./Pie";

const fullCircle = 2 * Math.PI;

type SliceProps = {
  value: number;
  fillColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
};

const Slice: React.FC<SliceProps> = props => {
  const pie = useContext(PieContext);

  // Draw slices of the pie
  const { context } = useContext(CanvasContext);

  const startAngle = pie.progress * pie.scale;

  context.beginPath();
  context.moveTo(pie.center.x, pie.center.y);
  context.arc(
    pie.center.x,
    pie.center.y,
    pie.radius,
    fullCircle * startAngle,
    fullCircle * (startAngle + props.value * pie.scale)
  );
  context.closePath();

  // Fill shape
  context.fillStyle = props.fillColor || `hsl(${pie.hue}, 100%, 72%)`;
  context.fill();

  // Add inset stroke when color or width is defined
  if (props.strokeColor || props.strokeWidth) {
    context.save();
    context.clip();
    context.strokeStyle = props.strokeColor;
    context.lineWidth = (props.strokeWidth || 0) * 2;
    context.stroke();
    context.restore();
  }

  pie.hue += props.value * pie.scale * 360;
  pie.progress += props.value;

  if (pie.progress > pie.total) {
    console.warn("Value of slices exceed the total value of the pie");
  }

  return null;
};

export default Slice;
