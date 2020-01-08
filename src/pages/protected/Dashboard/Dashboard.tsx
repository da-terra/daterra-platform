import React, { Fragment } from "react";
import { useQuery } from "@apollo/react-hooks";
import { IUser, INotification, IProject } from "@data-science-platform/shared";
import { loader } from "graphql.macro";
import RoutePath from "../../../data/RoutePath";
import InputType from "../../../components/general/Input/data/InputType";
import { SplashScreen } from "../../public/Home/styled";
import {
  Circle,
  Header,
  SearchForm,
  SearchInput,
  TopWrapper,
  Wrapper,
  DashboardProjectCarousel,
  Sidebar
  // PersonalStatistics
} from "./styled";

//
const dashboardQuery = loader("./dashboard.graphql");

type QueryResponse = {
  me: IUser;
  notifications: INotification[];
  myProjects: IProject[];
  newProjects: IProject[];
};

const Dashboard: React.FC = () => {
  const { loading, data } = useQuery<QueryResponse>(dashboardQuery);

  if (loading || data == null) {
    return <SplashScreen />;
  }

  return (
    <Fragment>
      <Circle x={20} y={-30} />

      <Header
        me={data?.me}
        notifications={data?.notifications || []}
        navigationLinks={[]}
      />

      <TopWrapper>
        <SearchForm>
          <SearchInput label="Zoeken" name="search" type={InputType.Search} />
        </SearchForm>

        <Sidebar>
          {/* <PersonalStatistics {...personalStatistics} /> */}
        </Sidebar>
      </TopWrapper>

      <Wrapper>
        <DashboardProjectCarousel
          title="Mijn projecten"
          link={{
            href: RoutePath.Dashboard,
            children: "Bekijk mijn projecten"
          }}
          projects={data.myProjects}
        />

        <DashboardProjectCarousel
          title="Nieuwe projecten"
          link={{
            href: RoutePath.Dashboard,
            children: "Bekijk nieuwe projecten"
          }}
          projects={data.newProjects}
        />
      </Wrapper>
    </Fragment>
  );
};

export default Dashboard;
