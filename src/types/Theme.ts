// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    uuid: string;

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
    };

    color: {
      // Shapes
      shapeBackground: string;

      // Backgrounds
      background: string;
      foreground: string;

      // Copy
      invertForeground: string;
      mutedForeground: string;
      accentForeground: string;
      darkAccent: string;
      lightAccent: string;
      lighterAccent: string;
    };

    font: {
      sansSerif: string;
      serif: string;
    };

    input: {
      backgroundColor: string;
      borderColor: string;
      copyColor: string;
      errorColor: string;
      warningColor: string;
    };

    tooltip: {
      backgroundColor: string;
      shadow: string;
    };
  }
}
