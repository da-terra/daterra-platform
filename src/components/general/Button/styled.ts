import styled from "styled-components";
import Easings from "../../../data/style/easings";

export const ButtonElement = styled.button`
  background: none;
  border: none;
  outline: none;
  display: inline;
  padding: 0;
  color: ${props => props.theme.copy.primary};
  text-decoration: none;
  cursor: pointer;
  transition: all 1.8s ${Easings.easeOutCubic};

  &:hover,
  &:disabled,
  &[disabled],
  &.muted {
    transition-duration: 0.6s;
    transition-timing-function: ${Easings.easeOutExpo};
  }

  &:disabled,
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
