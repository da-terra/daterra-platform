import styled, { keyframes } from "styled-components";
import Icon from "../Icon";

const appear = keyframes`
  0% {
    transform: translateY(1rem);
    opacity: 0;
  }
  100% {
    transform: translateY(0rem);
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  animation: 0.5s ${appear} forwards;

  svg {
    display: block;
  }
`;

export const Tooltip = styled.div`
  position: absolute;
  left: calc(100% + 1.5rem);
  top: 50%;
  transform: translate(0, -50%);
  padding: 1rem;
  border-radius: 0.8rem;
  white-space: nowrap;
  background: ${props => props.theme.tooltip.backgroundColor};
  box-shadow: ${props => props.theme.tooltip.shadow};
`;

export const Arrow = styled(Icon.ArrowLeft)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-1.6rem, -50%);
  width: 3rem;
  height: 3rem;
  fill: ${props => props.theme.tooltip.backgroundColor};
`;
