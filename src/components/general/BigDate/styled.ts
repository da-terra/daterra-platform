import styled from "styled-components";
import Paragraph from "../Paragraph";
import { Breakpoints } from "../../../data/style/variables";

export const Month = styled(Paragraph)`
  text-transform: capitalize;
  font-size: 3.5rem;

  @media (max-width: ${Breakpoints.H750}) {
    font-size: 2.5rem;
  }
`;

export const Day = styled(Paragraph)`
  font-size: 10rem;
  line-height: 1;
  margin-top: 0.5rem;

  @media (max-width: ${Breakpoints.H750}) {
    font-size: 6.5rem;
  }
`;
