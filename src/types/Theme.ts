// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    uuid: string;

    background: {
      primary: string;
      secondary: string;
      primaryAccent: string;
      secondaryAccent: string;
    };

    button: {
      solid: {
        backgroundColor: string;
        hoverBackgroundColor: string;
        copyColor: string;
        hoverCopyColor: string;
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
      primary: string;
      primaryInverted: string;
      primaryAccent: string;
      secondaryAccent: string;
    };

    input: {
      backgroundColor: string;
      borderColor: string;
      copyColor: string;
      errorColor: string;
      warningColor: string;
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
