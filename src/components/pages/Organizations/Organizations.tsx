import { useQuery } from "@apollo/react-hooks";
import {
  createPath,
  INotification,
  IOrganization,
  IUser
} from "@data-science-platform/shared";
import { loader } from "graphql.macro";
import React, { Fragment } from "react";
import { Route } from "react-router";
import { WrapperWidth } from "../../../components/general/Wrapper";
import RoutePath from "../../../data/RoutePath";
import Header from "../../blocks/Header";
import Organization from "../../general/Organization";
import SplashScreen from "../../general/SplashScreen";
import Circle from "../../util/Circle";
import { List, ListItem, PageWrapper } from "./styled";
import { LinkButton } from "../../general/Button";

const OrganizationDetail = React.lazy(() => import("./OrganizationDetail"));
const CreateOrganization = React.lazy(() => import("./CreateOrganization"));

const organizationsQuery = loader("./organizations.graphql");

type QueryResponse = {
  me: IUser;
  notifications: INotification[];
  organizations: IOrganization[];
};

const Organizations: React.FC = () => {
  const { loading, data, error } = useQuery<QueryResponse>(organizationsQuery);

  if (error) {
    throw error;
  }

  if (loading || data == null) {
    return <SplashScreen />;
  }

  return (
    <Fragment>
      <Circle x={20} y={-30} />

      <Header me={data?.me} notifications={data?.notifications || []} />

      <PageWrapper width={WrapperWidth.Small}>
        <List>
          {data?.organizations.map(organization => {
            const path = createPath(
              RoutePath.Organization,
              organization as any
            );

            return (
              <ListItem key={organization.id}>
                <Organization {...organization} />

                <LinkButton href={path}>Bekijken</LinkButton>
              </ListItem>
            );
          })}
        </List>
      </PageWrapper>

      <Route path={RoutePath.Cms.Organization} component={OrganizationDetail} />
      <Route
        path={RoutePath.Cms.OrganizationCreate}
        component={CreateOrganization}
      />
    </Fragment>
  );
};

export default Organizations;
