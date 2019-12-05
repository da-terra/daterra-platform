import styled from "styled-components";
import { Breakpoints } from "../../../data/style/variables";
import Button from "../../general/Button";

export { default as Logo } from "../../general/Logo";
export { default as Wrapper } from "../../general/Wrapper";
export { default as ArticleHeading } from "../ArticleHeading";

type BackgroundWrapperProps = {
  image: IImage;
  inverted?: boolean;
};

export const BackgroundWrapper = styled.div<BackgroundWrapperProps>`
  display: flex;
  flex-direction: column;
  color: ${props =>
    props.inverted
      ? props.theme.copy.primaryInverted
      : props.theme.copy.primary};
  background: url('${props => props.image.src}') center center / cover;
  background-color: ${props => props.image.fallbackColor};
  min-height: 70vh;
  max-height: 80rem;
  padding-top: 6rem;
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
  }
`;

export const ArticleHeadingButton = styled(Button)`
  margin-top: auto;
`;
