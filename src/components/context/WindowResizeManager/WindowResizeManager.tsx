import React from "react";

type WindowSizeManagerProps = {
  children: React.ReactNode;
};

type WindowSizeManagerState = {
  value: number;
};

export const WindowResizeContext = React.createContext<WindowSizeManagerState>({
  value: 0
});

class WindowResizeManager extends React.Component<
  WindowSizeManagerProps,
  WindowSizeManagerState
> {
  state = {
    value: 0
  };

  private resizeRaf: number = 0;

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = (event: Event) => {
    cancelAnimationFrame(this.resizeRaf);

    // Update state on animation frame to keep site smooth
    this.resizeRaf = requestAnimationFrame(() =>
      this.setState({ value: event.timeStamp })
    );
  };

  render() {
    return (
      <WindowResizeContext.Provider value={this.state}>
        {this.props.children}
      </WindowResizeContext.Provider>
    );
  }
}

export default WindowResizeManager;
