import styled from "styled-components";
import { LinkButton } from "../../general/Button";
import { default as ArticleCard } from "../../general/ArticleCard";
import { Breakpoints } from "../../../data/style/variables";
export { default as TagWrapper } from "../../general/TagWrapper";
export { default as Heading } from "../../general/Heading";

const marginSize = 2;

export const ArticlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const List = styled.div`
  display: flex;
  justify-content: space-between;
  margin: -${marginSize}rem;

  @media (max-width: ${Breakpoints.H1250}) {
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`;

export const Card = styled(ArticleCard)`
  margin: ${marginSize}rem;
  max-width: 35rem;

  @media (max-width: ${Breakpoints.H1250}) {
    max-width: none;
    width: calc(50% - ${marginSize * 2}rem);
  }

  @media (max-width: ${Breakpoints.H750}) {
    width: 100%;
  }
`;

export const CtaLink = styled(LinkButton)`
  margin-left: auto;
  margin-top: 6.4rem;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }

  @media (max-width: ${Breakpoints.H750}) {
    margin-top: 2.4rem;
  }
`;
