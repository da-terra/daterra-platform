import { DefaultTheme } from "styled-components";

const themes: DefaultTheme[] = [
  // Light theme
  {
    uuid: "15b7e36c-d595-11e9-bb65-2a2ae2dbcce4",

    button: {
      solid: {
        backgroundColor: "#03363E",
        hoverBackgroundColor: "#175C66",
        copyColor: "#FFFFFF",
        hoverCopyColor: "#FFFFFF"
      },
      link: {
        copyColor: "#03363E"
      }
    },

    card: {
      borderRadius: 10,
      shadow: "rgba(3, 54, 62, 0.1) 3px 3px 10px 0",
      invertedShadow: "rgba(0, 0, 0, 0.15) 3px -3px 15px 2px"
    },

    background: {
      primary: "#F8FBFB",
      secondary: "#FFFFFF",
      primaryAccent: "#03363E",
      secondaryAccent: "#D5EEED"
    },

    copy: {
      muted: "#A1A7A6",
      primary: "#434E4D",
      primaryInverted: "#FFFFFF",
      primaryAccent: "#03363E",
      secondaryAccent: "#50908B"
    },

    shape: {
      background: "rgba(0, 0, 0, 0.02)"
    },

    font: {
      sansSerif: '"Roboto", sans-serif',
      serif: '"Roboto Slab", serif'
    },

    input: {
      backgroundColor: "#FFFFFF",
      borderColor: "#D9E2E2",
      copyColor: "#A1A7A6",
      errorColor: "#FF383E",
      warningColor: "#FFA23C"
    },

    tooltip: {
      backgroundColor: "#FFFFFF",
      shadow: "rgba(0,0,0,0.1) 2px 2px 30px 0px"
    }
  }

  // Dark theme
  // {
  //   uuid: "f7aa558a-6bb5-447e-91c5-cfd0429b05d6",

  //   input: {
  //     backgroundColor: "#FFFFFFF",
  //     borderColor: "#E5F1F1"
  //   },

  //   card: {
  //     borderRadius: 10
  //   },

  //   font: {
  //     sansSerif: '"Roboto", sans-serif',
  //     serif: '"Roboto Slab", serif'
  //   },

  //   color: {
  //     shapeBackground: "rgba(255, 255, 255, 0.02)",
  //     background: "#090c0c",
  //     foreground: "#F8FBFB",
  //     invertForeground: "#000000",
  //     mutedForeground: "#A1A7A6",
  //     accentForeground: "#50908B",
  //     darkAccent: "#FFFFFF",
  //     lightAccent: "#053f48",
  //     lighterAccent: "#03363E"
  //   }
  // }
];

export default themes;
