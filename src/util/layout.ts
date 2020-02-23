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
  border-radius: 1rem;

  box-shadow: ${props =>
    props.inverted ? props.theme.card.shadowInverted : props.theme.card.shadow};

  background: ${props =>
    props.inverted
      ? props.theme.card.backgroundInverted
      : props.theme.card.background};

  background: linear-gradient(
    135deg,
    ${props =>
      props.inverted
        ? props.theme.card.backgroundInverted
        : props.theme.card.background},
    ${props =>
      props.inverted
        ? props.theme.card.backgroundInvertedAccent
        : props.theme.card.backgroundAccent}
  );

  color: ${props =>
    props.inverted
      ? props.theme.copy.primaryInverted
      : props.theme.copy.primary};
`;
