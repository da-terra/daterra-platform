import styled from "styled-components";
import ArticlesList from "../../../components/blocks/ArticlesList";

export {
  default as FeaturedArticleHero
} from "../../../components/blocks/FeaturedArticleHero";
export {
  default as SplashScreen
} from "../../../components/general/SplashScreen";
export { default as TagWrapper } from "../../../components/general/TagWrapper";

export const OverviewArticlesList = styled(ArticlesList)`
  margin-top: 15rem;
  margin-bottom: 5rem;
`;
