import { DefaultTheme } from "styled-components";

const themes: DefaultTheme[] = [
  // Light theme
  {
    uuid: "15b7e36c-d595-11e9-bb65-2a2ae2dbcce4",

    button: {
      solid: {
        backgroundColor: "#2BB48B",
        copyColor: "#FFFFFF",
        shadow: "rgba(3, 54, 62, 0.1) 3px 3px 10px 0",
        radius: "12px"
      },
      solidInverted: {
        backgroundColor: "#FFFFFF",
        copyColor: "#434E4D",
        shadow: "rgba(3, 54, 62, 0.1) 3px 3px 10px 0",
        radius: "12px"
      },
      link: {
        copyColor: "#03363E"
      }
    },

    card: {
      borderRadius: 10,
      background: "#FFFFFF",
      backgroundInverted: "#2bb48b",
      shadow: "rgba(3, 54, 62, 0.1) 3px 3px 10px 0",
      shadowInverted: "rgba(0, 0, 0, 0.15) 3px -3px 15px 2px"
    },

    background: {
      primary: "#F9F9F9",
      secondary: "#FFFFFF",
      accent: "#2BB48B"
    },

    copy: {
      primary: "#434E4D",
      primaryInverted: "#FFFFFF",
      secondary: "rgba(75, 84, 92, .5)",
      secondaryInverted: "rgba(255, 255, 255, 0.6)",
      tertiary: "rgba(75, 84, 92, .2)",
      tertiaryInverted: "rgba(255, 255, 255, .5)",
      accent: "#2bb48b",
      warning: "#FFA23C",
      error: "#e43136"
    },

    shape: {
      background: "rgba(0, 0, 0, 0.05)"
    },

    font: {
      sansSerif: '"Roboto", sans-serif',
      serif: '"Roboto Slab", serif'
    },

    input: {
      backgroundColor: "#FFFFFF",
      borderColor: "#D9E2E2",
      copyColor: "#A1A7A6",
      borderRadius: 1,
      padding: 2
    },

    tooltip: {
      backgroundColor: "#FFFFFF",
      shadow: "rgba(0, 0, 0, 0.1) 0 0 1rem 0"
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
