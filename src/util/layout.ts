import styled from "styled-components";

export const Page = styled.div`
  color: ${props => props.theme.copy.primary};
  background: ${props => props.theme.background.primary};
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
  background: ${props => props.theme.shape.background};
  min-width: 150rem;
  min-height: 150rem;
  border-radius: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: ${props => `translate(${-50 + props.x}%, ${props.y}%)`};
`;

type CardProps = {
  inverted?: boolean;
};

export const Card = styled.div<CardProps>`
  padding: 2rem;
  border-radius: ${props => props.theme.card.borderRadius}px;

  box-shadow: ${props =>
    props.inverted ? props.theme.card.invertedShadow : props.theme.card.shadow};

  background: ${props =>
    props.inverted
      ? props.theme.background.accent
      : props.theme.background.primary};

  color: ${props =>
    props.inverted
      ? props.theme.copy.primaryInverted
      : props.theme.copy.primary};
`;
