import styled from "styled-components";
import { Breakpoints } from "../../../data/style/variables";
import ArticleHeading from "../ArticleHeading";

export { default as Logo } from "../../general/Logo";
export { default as Wrapper } from "../../general/Wrapper";

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

  @media (max-width: ${Breakpoints.H750}) {
    padding-top: 3rem;
  }
`;

export const FeaturedArticleHeading = styled(ArticleHeading)`
  margin-top: auto;
`;
