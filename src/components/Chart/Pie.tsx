import React from "react";

type PieContextType = {
  progress: number;
  total: number;
  hue: number;
  slices: { color: string; label: string }[];
};

export const PieContext = React.createContext<PieContextType>({
  progress: 0,
  total: 1,

  // Keep track of hue for fill color of slices
  hue: 0,

  // List of slices that are rendered
  slices: []
});

type PieProps = {
  children: React.ReactNode;
};

const Pie: React.FC<PieProps> = ({ children, ...props }) => {
  const contextValue = {
    progress: 0,
    total: 0,
    hue: 0,
    slices: []
  };

  return (
    <PieContext.Provider value={contextValue}>{children}</PieContext.Provider>
  );
};

export default Pie;
