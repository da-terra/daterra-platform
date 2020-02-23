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
  left: 2rem;
  font-weight: ${FontWeight.Black};
  font-size: 1.6rem;
  pointer-events: none;
  transition: 0.25s ${Easings.easeOutExpo} all;
`;

export const InputElement = styled.input`
  background: ${props => props.theme.input.backgroundColor};
  border: 1px solid ${props => props.theme.input.borderColor};
  border-radius: 1rem;
  color: ${props => props.theme.input.copyColor};
  font-size: 1.6rem;
  line-height: 1;
  min-height: 7rem;
  outline: none;
  padding: 0 2rem;
  position: relative;
  transition: 0.2s ${Easings.easeOutExpo} border-color;
  width: 100%;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  /* Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }

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
