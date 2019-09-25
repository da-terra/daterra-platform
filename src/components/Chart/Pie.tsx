import React, { useContext } from "react";
import Vector2 from "./utils/Vector2";
import { CanvasContext } from "./Chart";

type PieProps = {
  children: React.ReactNode;
  total: number;
  hue?: number;
};

type PieContextType = {
  progress: number;
  total: number;
  scale: number;
  center: Vector2;
  radius: number;
  hue: number;
};

export const PieContext = React.createContext<PieContextType>({
  progress: 0,
  total: 1,
  scale: 1,
  center: new Vector2(0, 0),
  radius: 0,
  hue: 0
});

const Pie: React.FC<PieProps> = props => {
  const { element } = useContext(CanvasContext);

  const center = new Vector2(element.width / 2, element.height / 2);

  const contextValue = {
    progress: -(0.25 * props.total),
    total: props.total,
    scale: 1 / props.total,

    // Initial cursor position is center canvas
    center,

    // Pie should fill the canvas element
    radius: Math.min(center.x, center.y),

    // Keep track of hue when for slices with no predefined color
    hue: props.hue || 0
  };

  return (
    <PieContext.Provider value={contextValue}>
      {props.children}
    </PieContext.Provider>
  );
};

export default Pie;
