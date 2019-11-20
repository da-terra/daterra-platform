import React, { useState } from "react";
import { AppWrapper } from "./styled";

type LayoutState = {
  [name in LayoutStateVariable]?: any;
};

type LayoutContextType = {
  setValue: (key: LayoutStateVariable, value: any) => void;
} & LayoutState;

type LayoutProps = {
  children: React.ReactNode;
};

export enum LayoutStateVariable {
  HeaderHeight = "HeaderHeight"
}

export const LayoutContext = React.createContext<LayoutContextType>({
  setValue: () => {}
});

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [layoutState, setLayoutState] = useState<LayoutState>({});

  const context = {
    ...layoutState,
    setValue: (key: LayoutStateVariable, value: any) => {
      if (layoutState[key] === value) {
        return;
      }

      setLayoutState({ ...layoutState, [key]: value });
    }
  };

  return (
    <LayoutContext.Provider value={context}>
      <AppWrapper>{children}</AppWrapper>
    </LayoutContext.Provider>
  );
};

export default Layout;
