import React from "react";
import RoutePath from "../../data/RoutePath";
import {
  Page,
  Circle,
  Header,
  SearchForm,
  SearchInput,
  TopWrapper,
  Wrapper,
  DashboardProjectCarousel,
  Sidebar,
  PersonalStatistics
} from "./styled";

//
import { activeProject, newProject, personalStatistics } from "./mockData";

const Dashboard: React.FC = () => {
  return (
    <Page>
      <Circle x={20} y={-30} />

      <Header />

      <TopWrapper>
        <SearchForm>
          <SearchInput label="Zoeken" name="search" type="search" />
        </SearchForm>

        <Sidebar>
          <PersonalStatistics {...personalStatistics} />
        </Sidebar>
      </TopWrapper>

      <Wrapper>
        <DashboardProjectCarousel
          title="Actieve projecten"
          link={{
            to: RoutePath.Home,
            children: "Bekijk mijn actieve projecten"
          }}
          projects={[
            { ...activeProject, uuid: "1" },
            { ...activeProject, uuid: "1" }
          ]}
        />

        <DashboardProjectCarousel
          title="Nieuwe projecten"
          link={{
            to: RoutePath.Home,
            children: "Bekijk nieuwe projecten"
          }}
          projects={[
            { ...newProject, uuid: "1" },
            { ...newProject, uuid: "1" }
          ]}
        />
      </Wrapper>
    </Page>
  );
};

export default Dashboard;
