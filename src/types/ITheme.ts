// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    uuid: string;

    background: {
      primary: string;
      secondary: string;
      accent: string;
    };

    button: {
      solid: {
        backgroundColor: string;
        copyColor: string;
        shadow: string;
        radius: string;
      };
      solidInverted: {
        backgroundColor: string;
        copyColor: string;
        shadow: string;
        radius: string;
      };
      link: {
        copyColor: string;
      };
    };

    card: {
      borderRadius: number;
      shadow: string;
      invertedShadow: string;
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
      borderColor: string;
      shadow: string;
    };
  }
}
