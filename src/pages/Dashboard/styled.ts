import styled from "styled-components";
import { Wrapper } from "../../util/layout";
import Input from "../../components/general/Input";

export { Page, Circle } from "../../util/layout";
export { default as Header } from "../../components/blocks/Header";
export {
  default as PersonalStatistics
} from "../../components/general/PersonalStatistics";

export const SearchInput = styled(Input)`
  max-width: 50rem;
  width: 100%;
`;

export const SearchForm = styled(Wrapper)`
  margin: 5rem auto 7rem;
`;

export const ProjectWrapper = styled(Wrapper)`
  display: flex;
`;

type ProjectCarouselProps = {
  title: string;
  projects: any[];
  link: {
    to: string;
    children: React.ReactNode;
  };
};

export const ProjectCarousel = styled.div<ProjectCarouselProps>`
  background: white;
  width: 70%;
  height: 80px;
`;

export const ProjectCard = styled.div``;

export const Sidebar = styled.div`
  width: 30%;
  height: 150px;
  padding-left: 5rem;
`;
