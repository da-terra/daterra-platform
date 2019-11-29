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

type CardProps = {
  inverted?: boolean;
};

export const Card = styled.div<CardProps>`
  padding: 2rem;
  border-radius: ${props => props.theme.card.borderRadius}px;

  box-shadow: ${props =>
    props.inverted ? props.theme.card.shadowInverted : props.theme.card.shadow};

  background: ${props =>
    props.inverted
      ? props.theme.background.accent
      : props.theme.background.primary};

  color: ${props =>
    props.inverted
      ? props.theme.copy.primaryInverted
      : props.theme.copy.primary};
`;
