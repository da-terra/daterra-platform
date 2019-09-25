import React, { Fragment } from "react";
import styled from "styled-components";

type ChartProps = {
  children: JSX.Element | JSX.Element[];
};

export const CanvasContext = React.createContext<{
  element: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
}>({
  // @ts-ignore
  element: null,
  // @ts-ignore
  context: null
});

const Canvas = styled.canvas`
  display: block;
`;

class Chart extends React.Component<any, { canvasContext: any }> {
  private canvasElement = React.createRef<HTMLCanvasElement>();
  private resizeRaf: number = 0;

  state = {
    canvasContext: undefined
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResizeRaf);

    this.setState({
      canvasContext: this.canvasElement.current!.getContext("2d")
    });

    this.updateCanvasElementWidth();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResizeRaf);
  }

  handleResizeRaf = () => {
    cancelAnimationFrame(this.resizeRaf);
    this.resizeRaf = requestAnimationFrame(this.updateCanvasElementWidth);
  };

  updateCanvasElementWidth = () => {
    const element = this.canvasElement.current!;

    element.width = element.clientWidth;
    element.height = element.clientHeight;

    // Force update all children so that the render methods in all children is called again
    this.forceUpdate();
  };

  render() {
    return (
      <Fragment>
        <Canvas ref={this.canvasElement} />

        {this.canvasElement.current && (
          <CanvasContext.Provider
            value={{
              element: this.canvasElement.current,
              context: this.state.canvasContext
            }}
          >
            {this.props.children}
          </CanvasContext.Provider>
        )}
      </Fragment>
    );
  }
}

export default Chart;
