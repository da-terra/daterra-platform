import styled from "styled-components";
import Paragraph from "../../general/Paragraph";
import Partner from "../../general/Partner";
import { Breakpoints } from "../../../data/style/variables";
export { default as TagWrapper } from "../../general/TagWrapper";
export { default as Heading } from "../../general/Heading";

const marginSize = 4;

export const Background = styled.div`
  position: relative;
  background: ${props => props.theme.background.secondary};
  overflow: hidden;
`;

export const Content = styled(Paragraph)`
  max-width: 65rem;
`;

export const PartnersList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 7.8rem;
  margin-left: -${marginSize}rem;
  margin-right: -${marginSize}rem;
`;

export const PartnerCard = styled(Partner)`
  width: 30rem;
  margin: 0 ${marginSize}rem 7.8rem;

  @media (max-width: ${Breakpoints.H500}) {
    width: 100%;
  }
`;
