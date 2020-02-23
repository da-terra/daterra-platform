// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    background: {
      primary: string;
      secondary: string;
      accent: string;
    };

    button: {
      icon: {
        solid: {
          color: string;
          background: string;
          hoverColor: string;
          hoverBackground: string;
          activeColor: string;
          activeBackground: string;
          activeHoverColor: string;
          activeHoverBackground: string;
        };
        invertedSolid: {
          color: string;
          background: string;
          hoverColor: string;
          hoverBackground: string;
          activeColor: string;
          activeBackground: string;
          activeHoverColor: string;
          activeHoverBackground: string;
        };
      };
      link: {
        copyColor: string;
      };
      solid: {
        background: string;
        hoverBackground: string;
        color: string;
        hoverColor: string;
        shadow: string;
      };
      invertedSolid: {
        background: string;
        hoverBackground: string;
        color: string;
        hoverColor: string;
        shadow: string;
      };
    };

    card: {
      background: string;
      backgroundAccent: string;
      backgroundInverted: string;
      backgroundInvertedAccent: string;
      shadow: string;
      shadowInverted: string;
    };

    copy: {
      primary: string;
      primaryInverted: string;
      secondary: string;
      secondaryInverted: string;
      tertiary: string;
      tertiaryInverted: string;
      accent: string;
      warning: string;
      error: string;
    };

    input: {
      backgroundColor: string;
      borderColor: string;
      copyColor: string;
    };

    font: {
      sansSerif: string;
      serif: string;
    };

    shape: {
      background: string;
    };

    tooltip: {
      backgroundColor: string;
      shadow: string;
    };
  }
}
