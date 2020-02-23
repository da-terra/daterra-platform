import styled from "styled-components";
import Easings from "../../data/style/easings";
import { LinkButton } from "../general/Button";

export const CardMenu = styled.div`
  position: relative;
  min-width: 25rem;
  padding: 2rem;
  border-radius: 1rem;
  background: ${props => props.theme.card.background};
  box-shadow: ${props => props.theme.card.shadow};
  transition: 0.2s all ${Easings.easeOutBack};
  transform: translateY(0);
`;

export const CardMenuDivider = styled.hr`
  margin: 2rem 0;
  border: 0;
  border-bottom: 2px solid ${props => props.theme.copy.tertiary};
`;

export const CardMenuLink = styled(LinkButton)`
  display: block;

  &:hover {
    text-decoration: underline;
  }

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

CardMenuLink.defaultProps = {
  serif: true
};
