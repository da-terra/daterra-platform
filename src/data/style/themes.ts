import { DefaultTheme } from "styled-components";

const themes: DefaultTheme[] = [
  // Light theme
  {
    uuid: "15b7e36c-d595-11e9-bb65-2a2ae2dbcce4",

    button: {
      icon: {
        radius: "12px",
        solid: {
          color: "#FFFFFF",
          hoverColor: "#FFFFFF",
          background: "#2BB48B",
          hoverBackground: "#259976",
          activeColor: "#FFFFFF",
          activeHoverColor: "#FFFFFF",
          activeBackground: "#259976",
          activeHoverBackground: "#20906f"
        },
        invertedSolid: {
          color: "rgba(75, 84, 92, .5)",
          hoverColor: "rgba(75, 84, 92, .8)",
          background: "#FFFFFF",
          hoverBackground: "#FFFFFF",
          activeColor: "rgba(75, 84, 92, 1)",
          activeHoverColor: "rgba(75, 84, 92, .5)",
          activeBackground: "#FFFFFF",
          activeHoverBackground: "#FFFFFF"
        }
      },
      link: {
        copyColor: "#03363E"
      },
      solid: {
        background: "#2BB48B",
        hoverBackground: "#259976",
        color: "#FFFFFF",
        hoverColor: "#FFFFFF",
        shadow: "rgba(3, 54, 62, 0.1) 3px 3px 10px 0",
        radius: "12px"
      },
      invertedSolid: {
        background: "#FFFFFF",
        hoverBackground: "#FFFFFF",
        color: "#434E4D",
        hoverColor: "#434E4D",
        shadow: "rgba(3, 54, 62, 0.1) 3px 3px 10px 0",
        radius: "12px"
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
];

export default themes;
