import styled from "styled-components";

type CircleProps = {
  x: number;
  y: number;
  radius?: number;
};

export const Circle = styled.div<CircleProps>`
  background: ${props => props.theme.shape.background};
  min-width: ${props => `${props.radius || 150}rem`};
  min-height: ${props => `${props.radius || 150}rem`};
  border-radius: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: ${props => `translate(${-50 + props.x}%, ${props.y}%)`};
  pointer-events: none;
`;
