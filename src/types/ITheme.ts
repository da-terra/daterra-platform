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
      muted: string;
      mutedInverted: string;
      primary: string;
      primaryInverted: string;
      primaryAccent: string;
      secondaryAccent: string;
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
