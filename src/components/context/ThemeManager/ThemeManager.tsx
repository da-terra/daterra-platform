import React, { useCallback, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Context as StorageContext, StorageKey } from "../StorageManager";
import Theme, { ThemeName } from "./data/Theme";

type ThemeContext = {
  themeName: string;
  setTheme: Function;
};

export const Context = React.createContext<ThemeContext>({
  themeName: ThemeName.DefaultLight,
  setTheme: () => {}
});

const ThemeManager: React.FC = props => {
  const storage = useContext(StorageContext);

  const initialTheme =
    storage.getValue(StorageKey.themeName) || ThemeName.DefaultLight;

  const [themeName, setThemeName] = useState<ThemeName>(initialTheme);

  const setTheme = useCallback(
    (newThemeName: ThemeName) => {
      storage.setValue(StorageKey.themeName, newThemeName, true);
      setThemeName(newThemeName);
    },
    [storage]
  );

  const theme = Theme[themeName];

  return (
    <Context.Provider
      value={{
        themeName,
        setTheme
      }}
    >
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </Context.Provider>
  );
};

export default ThemeManager;
