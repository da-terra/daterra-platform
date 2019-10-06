import { DefaultTheme } from "styled-components";

const themes: DefaultTheme[] = [
  // Light theme
  {
    uuid: "15b7e36c-d595-11e9-bb65-2a2ae2dbcce4",

    card: {
      borderRadius: 10
    },

    font: {
      sansSerif: '"Roboto", sans-serif',
      serif: '"Roboto Slab", serif'
    },

    color: {
      background: "#F8FBFB",
      foreground: "#434E4D",
      invertForeground: "#FFFFFF",
      mutedForeground: "#A1A7A6",
      accentForeground: "#50908B",
      darkAccent: "#03363E",
      lightAccent: "#D1E9E8",
      lighterAccent: "#D5EEED"
    }
  },

  // Dark theme
  {
    uuid: "f7aa558a-6bb5-447e-91c5-cfd0429b05d6",

    card: {
      borderRadius: 10
    },

    font: {
      sansSerif: '"Roboto", sans-serif',
      serif: '"Roboto Slab", serif'
    },

    color: {
      background: "#090c0c",
      foreground: "#F8FBFB",
      invertForeground: "#000000",
      mutedForeground: "#A1A7A6",
      accentForeground: "#50908B",
      darkAccent: "#FFFFFF",
      lightAccent: "#053f48",
      lighterAccent: "#03363E"
    }
  }
];

export default themes;
