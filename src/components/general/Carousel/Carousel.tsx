import React from "react";
import styled from "styled-components";

const CarouselWrapper = styled.div`
  position: relative;
`;

const ItemWrapper = styled.div`
  display: inline-flex;
  width: 100%;
  transition: transform 1s cubic-bezier(0.77, 0, 0.175, 1);
`;

type CarouselProps = {
  children: React.ReactNode[];
  forwardButton?: React.RefObject<HTMLButtonElement>;
  backButton?: React.RefObject<HTMLButtonElement>;
  className?: string;
};

class Carousel extends React.Component<CarouselProps> {
  private readonly carouselElement = React.createRef<any>();

  private childRefs: any = {};
  private resizeRaf: number = 0;

  state = {
    index: 0,
    slideCount: 0
  };

  /**
   * Update slide count before re-render
   */
  static getDerivedStateFromProps(props: CarouselProps) {
    return {
      slideCount: React.Children.count(props.children) - 1
    };
  }

  componentDidMount() {
    const forwardButton =
      this.props.forwardButton && this.props.forwardButton.current;
    const backButton = this.props.backButton && this.props.backButton.current;

    if (forwardButton) {
      forwardButton.addEventListener("click", this.handleForwardButtonClick);
    }

    if (backButton) {
      backButton.addEventListener("click", this.handleBackButtonClick);
    }

    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    const forwardButton =
      this.props.forwardButton && this.props.forwardButton.current;
    const backButton = this.props.backButton && this.props.backButton.current;

    if (forwardButton) {
      forwardButton.removeEventListener("click", this.handleForwardButtonClick);
    }

    if (backButton) {
      backButton.removeEventListener("click", this.handleBackButtonClick);
    }

    window.removeEventListener("resize", this.handleResize);
  }

  private handleResize = () => {
    cancelAnimationFrame(this.resizeRaf);
    this.resizeRaf = requestAnimationFrame(this.updatePosition);
  };

  /**
   * Move carousel items 1 position forward
   */
  private handleForwardButtonClick = () => this.go(this.state.index + 1);

  /**
   * Move carousel items 1 position back
   */
  private handleBackButtonClick = () => this.go(this.state.index - 1);

  /**
   * Set new index and update inner wrapper style
   */
  go = (targetIndex: number) => {
    // Make sure that new index is within range
    const newIndex = Math.max(0, Math.min(targetIndex, this.state.slideCount));

    this.setState({ index: newIndex }, this.updatePosition);
  };

  private updatePosition = () => {
    const index = this.state.index;

    // Get index of target child from child refs
    const targetChild = Object.values(this.childRefs)[index] as HTMLElement;

    // Set carousel wrapper transform to adjust scroll position
    this.carouselElement.current!.style.transform = `translateX(-${targetChild.offsetLeft}px)`;
  };

  render() {
    // Clear child refs to remove unused elements
    this.childRefs = {};

    // Get refs for all children
    const children = React.Children.map(this.props.children, (child: any) =>
      React.cloneElement(child, {
        ref: (c: React.ReactNode) => (this.childRefs[child.key] = c)
      })
    );

    return (
      <CarouselWrapper className={this.props.className}>
        <ItemWrapper ref={this.carouselElement}>{children}</ItemWrapper>
      </CarouselWrapper>
    );
  }
}

export default Carousel;
