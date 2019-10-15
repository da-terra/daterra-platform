import styled from "styled-components";

export const Page = styled.div`
  color: ${props => props.theme.color.foreground};
  background: ${props => props.theme.color.background};
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  position: relative;
  max-width: 1200px;
  width: 100%;
  padding: 0 2rem;
  margin: 0 auto;
`;

type CircleProps = {
  x: number;
  y: number;
  alignRight?: boolean;
};

export const Circle = styled.div<CircleProps>`
  background: ${props => props.theme.color.shapeBackground};
  min-width: 150rem;
  min-height: 150rem;
  border-radius: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: ${props => `translate(${-50 + props.x}%, ${props.y}%)`};
`;
