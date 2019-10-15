import styled from "styled-components";
import { Wrapper } from "../../../util/layout";
import { FontFamily, FontWeight } from "../../../data/style/variables";

export const Background = styled.div`
  background: ${props => props.theme.background.secondaryAccent};
  height: 55rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const Slogan = styled.h2`
  color: ${props => props.theme.copy.primaryAccent};
  position: relative;
  font-size: 6.4rem;
  white-space: pre-line;
  font-family: ${FontFamily.ROBOTO};
  font-weight: ${FontWeight.BLACK};
  font-style: italic;
  margin: auto 0;
  padding-bottom: 10rem;
`;

export const Content = styled(Wrapper)`
  height: 100%;
  display: flex;
`;
