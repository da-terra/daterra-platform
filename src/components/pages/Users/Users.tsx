import { useQuery } from "@apollo/react-hooks";
import {
  createPath,
  INotification,
  IUser
} from "@data-science-platform/shared";
import { loader } from "graphql.macro";
import React, { Fragment } from "react";
import { Route } from "react-router";
import RoutePath from "../../../data/RoutePath";
import Header from "../../blocks/Header";
import Button from "../../general/Button";
import SplashScreen from "../../general/SplashScreen";
import { TableBody, TableCell, TableHead, TableRow } from "../../general/Table";
import { WrapperWidth } from "../../general/Wrapper";
import Circle from "../../util/Circle";
import { PageWrapper, StyledTable } from "./styled";

const User = React.lazy(() => import("../User"));
const organizationsQuery = loader("./users.graphql");

type QueryResponse = {
  me: IUser;
  notifications: INotification[];
  users: IUser[];
};

const Users: React.FC = () => {
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

      <PageWrapper width={WrapperWidth.Normal}>
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableCell heading>Display name</TableCell>
              <TableCell heading>Given name</TableCell>
              <TableCell heading>Middle name</TableCell>
              <TableCell heading>Family name</TableCell>
              <TableCell heading>Provider</TableCell>
              <TableCell heading>Role</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data?.users.map(user => {
              const path = createPath(RoutePath.Cms.User, user as any);

              return (
                <TableRow key={user.id}>
                  <TableCell>
                    <Button href={path}>{user.displayName}</Button>
                  </TableCell>
                  <TableCell>{user.name.givenName}</TableCell>
                  <TableCell>{user.name.middleName}</TableCell>
                  <TableCell>{user.name.familyName}</TableCell>
                  <TableCell>{user.provider}</TableCell>
                  <TableCell>{user.role}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </StyledTable>
      </PageWrapper>

      <Route path={RoutePath.Cms.User} component={User} />
    </Fragment>
  );
};

export default Users;
