import React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { StorageKey } from "../StorageManager";
import themes from "../../../data/style/themes";

type ThemeProps = {
  children: JSX.Element;
};

type ThemeContext = {
  theme: DefaultTheme;
  themes: DefaultTheme[];
  setTheme: Function;
  cycleThemes: Function;
};

export const Context = React.createContext<ThemeContext>({
  theme: themes[0],
  themes: themes,
  setTheme: () => {},
  cycleThemes: () => {}
});

class ThemeManager extends React.Component<ThemeProps, ThemeContext> {
  constructor(props: ThemeProps) {
    super(props);

    const savedThemeUuid = localStorage.getItem(StorageKey.themeUuid);
    const savedTheme = themes.find(theme => theme.uuid === savedThemeUuid);

    const [firstTheme] = themes;

    this.state = {
      theme: savedTheme || firstTheme,
      themes,
      setTheme: this.setTheme,
      cycleThemes: this.cycleThemes
    };
  }

  setTheme = (theme: DefaultTheme) => {
    if (!theme) {
      return;
    }

    localStorage.setItem(StorageKey.themeUuid, theme.uuid);

    this.setState({ theme });
  };

  cycleThemes = () => {
    const activeThemeUuid = this.state.theme.uuid;
    const activeThemeIndex = themes.findIndex(
      theme => theme.uuid === activeThemeUuid
    );

    const nextThemeIndex = (activeThemeIndex + 1) % themes.length;

    this.setTheme(themes[nextThemeIndex]);
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        <ThemeProvider theme={this.state.theme}>
          {this.props.children}
        </ThemeProvider>
      </Context.Provider>
    );
  }
}

export default ThemeManager;
