import styled, { css } from "styled-components";
import { LinkButton } from "../../general/Button";
import { default as ArticleCard } from "../../general/ArticleCard";
import { Breakpoints } from "../../../data/style/variables";

const marginSize = 2;

export const ArticlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -${marginSize}rem;

  @media (max-width: ${Breakpoints.H1250}) {
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`;

const cardCss = css`
  margin: ${marginSize}rem;
  width: 40rem;

  @media (max-width: ${Breakpoints.H1250}) {
    max-width: none;
    width: calc(50% - ${marginSize * 2}rem);
  }

  @media (max-width: ${Breakpoints.H750}) {
    width: 100%;
  }
`;

export const StyledArticleCard = styled(ArticleCard)`
  ${cardCss}
`;

export const CardGhost = styled.div`
  ${cardCss}

  background: rgba(0, 0, 0, 0.05);
  height: 40rem;
  border-radius: 1rem;
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
