import styled from "styled-components";
import Easings from "../../../data/style/easings";

export const ButtonElement = styled.button`
  background: none;
  border: none;
  outline: none;
  display: inline;
  padding: 0;
  color: currentColor;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.5s ${Easings.easeOutExpo};

  &:hover,
  &:disabled,
  &[disabled],
  &.muted {
    transition-timing-function: ${Easings.easeOutExpo};
  }

  &:disabled,
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
