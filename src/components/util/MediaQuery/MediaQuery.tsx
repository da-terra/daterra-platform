import React, { useContext } from "react";
import { WindowResizeContext } from "../../context/WindowResizeManager";

type MediaQueryProps = {
  mediaQuery: string;
  children: () => React.ReactNode;
};

// @ts-ignore
const MediaQuery: React.FC<MediaQueryProps> = ({ mediaQuery, children }) => {
  // Use WindowResizeContext to trigger update on window resize
  useContext(WindowResizeContext);

  // Render fallback or nothing when
  // - window is not available
  // - media query does not match current window state
  if (!window || !window.matchMedia(mediaQuery).matches) {
    return null;
  }

  return children();
};

export default MediaQuery;
