import styled from "styled-components";
import { InputElement, InputWrapper } from "../Input/styled";

export const InputGroup = styled.fieldset`
  padding: 0;
  border: none;

  ${InputWrapper} {
    width: 100%;
    display: flex;

    ${InputElement} {
      border-radius: 0;
      border: none;
    }

    &:not(:first-child)::before {
      content: "";
      display: block;
      width: calc(100% - 4rem);
      border-bottom: 1px solid ${props => props.theme.input.borderColor};
      position: absolute;
      top: 0;
      z-index: 1;
    }

    &:first-child ${InputElement} {
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
    }

    &:last-child ${InputElement} {
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 1rem;
    }
  }
`;
