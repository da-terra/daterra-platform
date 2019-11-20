import styled from "styled-components";
import IconTooltip from "../../general/IconTooltip";
import { FontWeight } from "../../../data/style/variables";
import Easings from "../../../data/style/easings";

export const Tooltip = styled(IconTooltip)`
  position: absolute;
  right: 2rem;
`;

export const Label = styled.label`
  position: absolute;
  left: ${props => props.theme.input.padding}rem;
  font-weight: ${FontWeight.Black};
  font-size: 1.6rem;
  pointer-events: none;
  transition: 0.05s ${Easings.easeOutExpo} all;
`;

export const InputElement = styled.input`
  background: ${props => props.theme.input.backgroundColor};
  border: 1px solid ${props => props.theme.input.borderColor};
  border-radius: ${props => props.theme.input.borderRadius}rem;
  color: ${props => props.theme.input.copyColor};
  font-size: 1.6rem;
  line-height: 1;
  min-height: 7rem;
  outline: none;
  padding: 0 ${props => props.theme.input.padding}rem;
  position: relative;
  transition: 0.2s ${Easings.easeOutExpo} border-color;
  width: 100%;

  &:placeholder-shown {
    padding-top: 1rem;
    padding-bottom: 1rem;

    &:focus + ${Label} {
      opacity: 0.5;
    }
  }

  &:not(:placeholder-shown) {
    padding-top: 2rem;
  }

  &:not(:placeholder-shown) + ${Label} {
    transform: translateY(-1rem);
    font-size: 1.4rem;
  }
`;

type WrapperProps = {
  children: React.ReactNode;
  hasError?: boolean;
};

export const InputWrapper = styled.div<WrapperProps>`
  display: inline-flex;
  position: relative;
  font-size: 1.4rem;
  align-items: center;
  justify-content: center;
`;
