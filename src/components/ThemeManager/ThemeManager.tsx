import React from "react";
import { ThemeProvider } from "styled-components";
import LocalStorageKeys from "../../data/LocalStorageKeys";
import Theme from "../../types/Theme";

type ThemeProps = {
  themes: Theme[];
  children: JSX.Element;
};

type ThemeContext = {
  theme: Theme;
  themes: Theme[];
  setTheme: Function;
};

export const Context = React.createContext<ThemeContext>({
  theme: {
    uuid: "",
    backgroundColor: "",
    foregroundColor: "",
    accentColor: ""
  },
  themes: [],
  setTheme: () => {}
});

class ThemeManager extends React.Component<ThemeProps, ThemeContext> {
  constructor(props: ThemeProps) {
    super(props);

    const savedThemeUuid = localStorage.getItem(LocalStorageKeys.THEME_UUID);
    const savedTheme = props.themes.find(
      theme => theme.uuid === savedThemeUuid
    );

    const [firstTheme] = props.themes;

    this.state = {
      theme: savedTheme || firstTheme,
      themes: props.themes,
      setTheme: this.setTheme
    };
  }

  setTheme = (theme: Theme) => {
    if (!theme) {
      return;
    }

    localStorage.setItem(LocalStorageKeys.THEME_UUID, theme.uuid);

    this.setState({ theme });
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
