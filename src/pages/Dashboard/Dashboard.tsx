import React from "react";
import RoutePath from "../../data/RoutePath";
import { Page, Circle, Wrapper } from "../../util/layout";
import Header from "../../components/blocks/Header";
import {
  SearchForm,
  SearchInput,
  DashboardContent,
  DashboardRow,
  ProjectCarousel,
  PersonalStatistics
} from "./styled";
import { projectMock, personalStatistics } from "./mockData";

const Dashboard: React.FC = () => {
  return (
    <Page>
      <Circle x={20} y={-30} />

      <Header />

      <Wrapper>
        <SearchForm>
          <SearchInput label="Zoeken" name="search" type="search" />
        </SearchForm>

        <DashboardContent>
          <DashboardRow>
            <ProjectCarousel
              title="Actieve projecten"
              link={{
                to: RoutePath.Home,
                children: "Bekijk mijn actieve projecten"
              }}
              projects={[projectMock, projectMock, projectMock, projectMock]}
            />

            <PersonalStatistics {...personalStatistics} />
          </DashboardRow>

          <DashboardRow>
            <ProjectCarousel
              title="Nieuwe projecten"
              link={{
                to: RoutePath.Home,
                children: "Bekijk nieuwe projecten"
              }}
              projects={[projectMock, projectMock, projectMock, projectMock]}
            />
          </DashboardRow>
        </DashboardContent>
      </Wrapper>
    </Page>
  );
};

export default Dashboard;
