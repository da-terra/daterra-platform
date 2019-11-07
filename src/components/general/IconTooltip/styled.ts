import styled, { keyframes } from "styled-components";
import Icon from "../Icon";

const appearWrapper = keyframes`
  0% {
    transform: translateY(1rem);
    opacity: 0;
  }
  100% {
    transform: translateY(0rem);
    opacity: 1;
  }
`;

const appearTooltip = keyframes`
  0% {
    transform: translate(1rem, -50%);
    opacity: 0;
  }
  100% {
    transform: translate(0rem, -50%);
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  animation: 0.5s ${appearWrapper} forwards;

  svg {
    display: block;
  }
`;

export const IconWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

export const Tooltip = styled.div`
  position: absolute;
  left: -1rem;
  top: 50%;
  padding: 1rem 1.5rem 1rem 4.5rem;
  border-radius: 0.8rem;
  white-space: nowrap;
  background: ${props => props.theme.tooltip.backgroundColor};
  border: 1px solid ${props => props.theme.tooltip.borderColor};
  box-shadow: ${props => props.theme.tooltip.shadow};
  animation: 0.4s ${appearTooltip} forwards;
`;
