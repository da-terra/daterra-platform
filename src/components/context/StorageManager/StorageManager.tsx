import React from "react";
import { StorageKey, StorageDefaultValues } from "./data";

type StorageManagerProps = {
  prefix: string;
  children: React.ReactNode;
};

type StorageManagerState = {
  updatedAt: number;
  getValue: (key: StorageKey) => any;
  setValue: (key: StorageKey, value: any, persist?: boolean) => void;
  removeValue: (key: StorageKey) => void;
};

export const StorageManagerContext = React.createContext<StorageManagerState>({
  updatedAt: Date.now(),
  getValue: () => undefined,
  setValue: () => {
    throw new Error("Please wait for StorageContext to be initialized");
  },
  removeValue: () => {
    throw new Error("Please wait for StorageContext to be initialized");
  }
});

class StorageManagerManager extends React.Component<
  StorageManagerProps,
  StorageManagerState
> {
  constructor(props: StorageManagerProps) {
    super(props);

    this.state = {
      updatedAt: Date.now(),
      getValue: this.getValue,
      setValue: this.setValue,
      removeValue: this.removeValue
    };
  }

  getValue = (key: StorageKey) => {
    const applicationKey = `${this.props.prefix}-${key}`;

    const value =
      localStorage.getItem(applicationKey) ||
      sessionStorage.getItem(applicationKey);

    return (value && JSON.parse(value)) || StorageDefaultValues[key];
  };

  setValue = (key: StorageKey, value: any, persist?: boolean) => {
    const jsonValue = JSON.stringify(value);
    const applicationKey = `${this.props.prefix}-${key}`;

    if (persist) {
      if (sessionStorage.getItem(key)) {
        throw new Error(
          `Cannot store value for key \`${key}\` because it's already in sessionStorage`
        );
      }

      localStorage.setItem(applicationKey, jsonValue);

      // Update context to make sure that the new value is propagated throughout the application
      this.setState({ updatedAt: Date.now() });
      return;
    }

    if (localStorage.getItem(key)) {
      throw new Error(
        `Cannot store value for key \`${key}\` because it's already in localStorage`
      );
    }

    sessionStorage.setItem(applicationKey, jsonValue);

    // Update context to make sure that the new value is propagated throughout the application
    this.setState({ updatedAt: Date.now() });
  };

  removeValue = (key: StorageKey) => {
    localStorage.removeItem(key);
    sessionStorage.removeItem(key);

    // Update context to make sure that the new value is propagated throughout the application
    this.setState({ updatedAt: Date.now() });
  };

  render() {
    return (
      <StorageManagerContext.Provider value={this.state}>
        {this.props.children}
      </StorageManagerContext.Provider>
    );
  }
}

export default StorageManagerManager;
