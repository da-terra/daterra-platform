import React from "react";
import RoutePath from "../../data/RoutePath";
import {
  Page,
  Circle,
  Header,
  SearchForm,
  SearchInput,
  ProjectWrapper,
  ProjectCarousel,
  Sidebar,
  PersonalStatistics
} from "./styled";
import { projectMock, personalStatistics } from "./mockData";

const Dashboard: React.FC = () => {
  return (
    <Page>
      <Circle x={20} y={-30} />

      <Header />

      <SearchForm as="form">
        <SearchInput label="Zoeken" name="search" type="search" />
      </SearchForm>

      <ProjectWrapper>
        <ProjectCarousel
          title="Actieve projecten"
          link={{
            to: RoutePath.Home,
            children: "Bekijk mijn actieve projecten"
          }}
          projects={[projectMock, projectMock, projectMock, projectMock]}
        />

        <Sidebar>
          <PersonalStatistics {...personalStatistics} />
        </Sidebar>
      </ProjectWrapper>

      <ProjectWrapper>
        <ProjectCarousel
          title="Nieuwe projecten"
          link={{
            to: RoutePath.Home,
            children: "Bekijk nieuwe projecten"
          }}
          projects={[projectMock, projectMock, projectMock, projectMock]}
        />
      </ProjectWrapper>
    </Page>
  );
};

export default Dashboard;
