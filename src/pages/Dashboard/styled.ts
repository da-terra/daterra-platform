import styled from "styled-components";
import Input from "../../components/general/Input";

export const SearchForm = styled.form``;

export const SearchInput = styled(Input)`
  max-width: 50rem;
  width: 100%;
`;

export const DashboardContent = styled.div``;

export const DashboardRow = styled.div``;

type ProjectCarouselProps = {
  title: string;
  projects: any[];
  link: {
    to: string;
    children: React.ReactNode;
  };
};

export const ProjectCarousel = styled.div<ProjectCarouselProps>``;

export const ProjectCard = styled.div``;

export const PersonalStatistics = styled.div``;
