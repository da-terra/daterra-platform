// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    uuid: string;

    card: {
      borderRadius: number;
    };

    font: {
      sansSerif: string;
      serif: string;
    };

    color: {
      background: string;
      foreground: string;
      invertForeground: string;
      mutedForeground: string;
      accentForeground: string;
      darkAccent: string;
      lightAccent: string;
      lighterAccent: string;
    };
  }
}
