import styled from "styled-components";

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
