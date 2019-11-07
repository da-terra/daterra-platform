import styled from "styled-components";
import { LinkButton } from "../../general/Button";
import { default as ArticleCard } from "../../general/ArticleCard";
export { default as TagWrapper } from "../../general/TagWrapper";
export { default as Heading } from "../../general/Heading";

const marginSize = 2;

export const ArticlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ArticlesList = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 -${marginSize}rem;
`;

export const Card = styled(ArticleCard)`
  margin: 0 ${marginSize}rem;
  max-width: 35rem;
`;

export const CtaLink = styled(LinkButton)`
  margin-left: auto;
  margin-top: 6.4rem;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;
