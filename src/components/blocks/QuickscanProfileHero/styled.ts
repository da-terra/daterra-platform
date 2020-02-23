import styled from "styled-components";
import { Breakpoints } from "../../../data/style/variables";
import Wrapper from "../../general/Wrapper";
import Heading from "../../general/Heading";
import Paragraph from "../../general/Paragraph";

export const Background = styled.div`
  background: ${props => props.theme.background.accent};
  color: ${props => props.theme.copy.primaryInverted};
  min-height: 65vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const Content = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  padding-top: 6.4rem;
  padding-bottom: 6.4rem;

  @media (max-width: ${Breakpoints.H1000}) {
    padding-top: 4.6rem;
    padding-bottom: 4.6rem;
  }

  @media (max-width: ${Breakpoints.H500}) {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;

export const HeroHeader = styled.div`
  display: flex;
  margin-bottom: 15rem;

  @media (max-width: ${Breakpoints.H750}) {
    margin-bottom: 10rem;
  }
`;

export const HeroBody = styled.div`
  margin-top: auto;
  margin-bottom: 1.6rem;
`;

const bodyCss = `
  max-width: 50rem;

  @media (max-width: ${Breakpoints.H1000}) {
    max-width: none;
  }
`;

export const HeroEyebrow = styled(Heading)`
  ${bodyCss}
`;

export const HeroTitle = styled(Heading)`
  ${bodyCss}
  margin: 1rem 0 2rem;
`;

export const HeroSubtitle = styled(Paragraph)`
  ${bodyCss}
`;
