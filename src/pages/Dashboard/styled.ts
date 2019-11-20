import styled from "styled-components";
import Input from "../../components/general/Input";
import Wrapper from "../../components/general/Wrapper";
import ProjectCarousel from "../../components/general/ProjectCarousel";

export { Circle } from "../../util/layout";
export { default as Wrapper } from "../../components/general/Wrapper";
export { default as Header } from "../../components/blocks/Header";
export {
  default as PersonalStatistics
} from "../../components/general/PersonalStatistics";

export const TopWrapper = styled(Wrapper)`
  margin: 5rem auto 7rem;
  z-index: 1;
`;

export const SearchForm = styled.form``;

export const SearchInput = styled(Input)`
  max-width: 50rem;
  width: 100%;
`;

export const Sidebar = styled.div`
  position: absolute;
  right: 2rem;
  top: 0;
  width: 30%;
  padding-left: 5rem;
`;

export const DashboardProjectCarousel = styled(ProjectCarousel)`
  width: 70%;

  &:last-child {
    margin-bottom: 10rem;
  }
`;
