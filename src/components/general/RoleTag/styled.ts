import styled from "styled-components";
import Paragraph from "../Paragraph";
import { Role } from "@data-science-platform/shared";
import { FontColor } from "../../../data/style/variables";

const roleStyle: any = {
  [Role.Admin]: {
    color: FontColor.PrimaryInverted,
    background: "#4282EA"
  },
  [Role.Company]: {
    color: FontColor.PrimaryInverted,
    background: "#8540CD"
  },
  [Role.ContentEditor]: {
    color: FontColor.PrimaryInverted,
    background: "#FD4444"
  },
  [Role.Expert]: {
    color: FontColor.PrimaryInverted,
    background: "#40CD7A"
  },
  [Role.Student]: {
    color: FontColor.PrimaryInverted,
    background: "#ECAA1D"
  },
  [Role.Team]: {
    color: FontColor.PrimaryInverted,
    background: "#D544FD"
  }
};

export const Tag = styled(Paragraph)<any>`
  padding: 0.5rem 1.5rem;
  color: ${props => props.theme.copy[roleStyle[props.role].color]};
  background: ${props => roleStyle[props.role].background};
  border-radius: 10rem;
  display: inline-block;
`;
