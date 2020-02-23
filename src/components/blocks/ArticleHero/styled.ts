import styled from "styled-components";
import { IImage } from "@data-science-platform/shared";
import { Breakpoints } from "../../../data/style/variables";

type BackgroundWrapperProps = {
  image: IImage;
  inverted?: boolean;
};

export const BackgroundWrapper = styled.div<BackgroundWrapperProps>`
  color: ${props =>
    props.inverted
      ? props.theme.copy.primaryInverted
      : props.theme.copy.primary};
  background: url('${props => props.image.src}') center center / cover;
  background-color: ${props => props.image.fallbackColor};
  min-height: 50vh;
  max-height: 60rem;
  padding-top: 6rem;
  padding-bottom: 6rem;
  position: relative;

  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
  }

  @media (max-width: ${Breakpoints.H750}) {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
`;
