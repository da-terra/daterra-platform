import styled from "styled-components";
import IconTooltip from "../../general/IconTooltip";
import { FontWeight } from "../../../data/style/variables";
import Easings from "../../../data/style/easings";

const offsetLeft = 2;

export const Tooltip = styled(IconTooltip)`
  position: absolute;
  right: 2rem;
`;

export const Label = styled.label`
  position: absolute;
  left: ${offsetLeft}rem;
  font-weight: ${FontWeight.Black};
  font-size: 1.6rem;
  transition: 0.05s ${Easings.easeOutExpo} all;
`;

export const InputElement = styled.input`
  position: relative;
  padding: 0 ${offsetLeft}rem;
  width: 100%;
  min-height: 7rem;
  line-height: 1;
  border: 1px solid ${props => props.theme.input.borderColor};
  color: ${props => props.theme.input.copyColor};
  outline: none;
  background: ${props => props.theme.input.backgroundColor};
  transition: 0.2s ${Easings.easeOutExpo} border-color;
  border-radius: 1rem;
  font-size: 1.6rem;

  &:placeholder-shown {
    padding-top: 1rem;
    padding-bottom: 1rem;
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

export const Wrapper = styled.div<WrapperProps>`
  display: inline-flex;
  position: relative;
  font-size: 1.4rem;
  align-items: center;
  justify-content: center;
`;
