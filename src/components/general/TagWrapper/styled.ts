import styled from "styled-components";
import { Breakpoints } from "../../../data/style/variables";
import Paragraph from "../Paragraph";
export { default as Wrapper } from "../Wrapper";

export const Background = styled.div`
  position: relative;
  overflow: hidden;
`;

export const HeadingWrapper = styled.div`
  padding-top: 10.2rem;
  padding-bottom: 2.4rem;

  @media (max-width: ${Breakpoints.H750}) {
    padding-top: 6.4rem;
  }
`;

export const Description = styled(Paragraph)`
  margin-bottom: 4.2rem;
  max-width: 75%;
`;

export const Content = styled.div`
  position: relative;
  padding-bottom: 10.2rem;

  @media (max-width: ${Breakpoints.H500}) {
    padding-bottom: 4.6rem;
  }
`;

export const Tag = styled(Paragraph)`
  position: absolute;
  text-transform: uppercase;
  top: 0;
  left: 0;
  transform: translate(calc(-100% - 5.2rem), 0);

  @media (max-width: ${Breakpoints.H1500}) {
    display: none;
  }
`;
