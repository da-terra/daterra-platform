import styled from "styled-components";
import { Wrapper } from "../../../util/layout";
import { FontFamily, FontWeight } from "../../../data/style/variables";
import { SolidButton } from "../../general/Button";

export const Background = styled.div`
  background: ${props => props.theme.background.accent};
  height: 55rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const Slogan = styled.h2`
  color: ${props => props.theme.copy.primaryInverted};
  position: relative;
  font-size: 5.6rem;
  white-space: pre-line;
  font-family: ${FontFamily.Roboto};
  font-weight: ${FontWeight.Black};
`;

export const Content = styled(Wrapper)`
  display: flex;
  flex-direction: column;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 50%;
`;

export const TargetButton = styled(SolidButton)`
  white-space: nowrap;
  margin-bottom: 1.5rem;

  &:not(:last-child) {
    margin-right: 3.5rem;
  }
`;
