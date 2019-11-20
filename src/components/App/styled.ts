import { createGlobalStyle } from "styled-components";
import { FontFamily } from "../../data/style/variables";

export { default as SplashScreen } from "../general/SplashScreen";

export const GlobalStyle = createGlobalStyle<{ gridSize: number }>`
  html,
  body {
    /* Grid size is defined using the font-size */
    font-size: ${props => props.gridSize}px;
  }

  body {
    font-family: ${FontFamily.Roboto};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${props => props.theme.background.primary};
    color: ${props => props.theme.copy.primary};
    overflow-x: hidden;
  }

  * {
    box-sizing: border-box;
  }

  svg {
    fill: currentColor;
    min-width: 24px;
    min-height: 24px;
  }
`;
