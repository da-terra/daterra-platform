import React from "react";
import styled from "styled-components";

const CarouselWrapper = styled.div`
  position: relative;
`;

const ItemWrapper = styled.div`
  display: flex;
  transition: transform 1.25s cubic-bezier(0.19, 1, 0.22, 1);
`;

type CarouselProps = {
  children: React.ReactNode[];
  forwardButton?: React.RefObject<HTMLButtonElement>;
  backButton?: React.RefObject<HTMLButtonElement>;
  className?: string;
};

type RefObject = {
  [key: string]: HTMLElement;
};

class Carousel extends React.Component<CarouselProps> {
  private readonly itemWrapper = React.createRef<any>();

  private childRefs: RefObject = {};

  private resizeRaf: number = 0;
  private autoScrollTimeout: number = 0;

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

    // Initialize carousel by setting the first slide
    this.updatePosition();
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.resizeRaf);
    clearTimeout(this.autoScrollTimeout);

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
    Object.values(this.childRefs).forEach((element, index) => {
      const isTargetChild = this.state.index === index;

      element.dataset.isActive = isTargetChild.toString();

      if (isTargetChild) {
        const wrapperElement = this.itemWrapper.current!;

        // Set carousel wrapper transform to adjust scroll position
        wrapperElement.style.transform = `translateX(-${element.offsetLeft}px)`;
      }
    });

    // Auto scroll carousel every 5 seconds
    clearTimeout(this.autoScrollTimeout);
    this.autoScrollTimeout = setTimeout(() => {
      const nextIndex = (this.state.index + 1) % (this.state.slideCount + 1);
      this.go(nextIndex);
    }, 5000);
  };

  render() {
    // Clear child refs to remove unused elements
    this.childRefs = {};

    // Get refs for all children
    const children = React.Children.map(this.props.children, (child: any) =>
      React.cloneElement(child, {
        ref: (c: HTMLElement) => (this.childRefs[child.key] = c)
      })
    );

    return (
      <CarouselWrapper className={this.props.className}>
        <ItemWrapper ref={this.itemWrapper}>{children}</ItemWrapper>
      </CarouselWrapper>
    );
  }
}

export default Carousel;
