import { useQuery } from "@apollo/react-hooks";
import { INotification, IProject, IUser } from "@data-science-platform/shared";
import { loader } from "graphql.macro";
import React, { Fragment } from "react";
import RoutePath from "../../../data/RoutePath";
import Footer from "../../blocks/Footer";
import Header from "../../blocks/Header";
import InputType from "../../general/Input/data/InputType";
import PersonalStatistics from "../../general/PersonalStatistics";
import SplashScreen from "../../general/SplashScreen";
import Wrapper from "../../general/Wrapper";
import Circle from "../../util/Circle";
import {
  DashboardProjectCarousel,
  SearchForm,
  SearchInput,
  Sidebar,
  TopWrapper
} from "./styled";

//
const dashboardQuery = loader("./dashboard.graphql");

type QueryResponse = {
  me: IUser;
  notifications: INotification[];
  myProjects: Partial<IProject>[];
  newProjects: Partial<IProject>[];
  finishedProjects: Partial<IProject>[];
};

const MIN_PROJECTS = 2;

const Dashboard: React.FC = () => {
  const { loading, data, error } = useQuery<QueryResponse>(dashboardQuery);

  if (error) {
    throw error;
  }

  if (loading || data == null) {
    return <SplashScreen />;
  }

  const myProjects = [
    ...data.myProjects,
    ...new Array(Math.max(MIN_PROJECTS - data.myProjects.length, 0)).fill({})
  ];

  const newProjects = [
    ...data.newProjects,
    ...new Array(Math.max(MIN_PROJECTS - data.newProjects.length, 0)).fill({})
  ];

  return (
    <Fragment>
      <Circle x={20} y={-30} />

      <Header
        me={data?.me}
        notifications={data?.notifications || []}
        navigationLinks={[
          {
            href: RoutePath.CmsIndex,
            children: "Content Management",
            id: RoutePath.CmsIndex
          }
        ]}
      />

      <TopWrapper>
        <SearchForm>
          <SearchInput label="Zoeken" name="search" type={InputType.Search} />
        </SearchForm>

        <Sidebar>
          <PersonalStatistics {...data.me} finishedProjects={[]} />
        </Sidebar>
      </TopWrapper>

      <Wrapper>
        <DashboardProjectCarousel
          title="Mijn projecten"
          link={{
            href: RoutePath.Dashboard,
            children: "Bekijk mijn projecten"
          }}
          projects={myProjects}
        />

        <DashboardProjectCarousel
          title="Nieuwe projecten"
          link={{
            href: RoutePath.Dashboard,
            children: "Bekijk nieuwe projecten"
          }}
          projects={newProjects}
        />
      </Wrapper>

      <Footer />
    </Fragment>
  );
};

export default Dashboard;
