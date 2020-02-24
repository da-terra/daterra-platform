import React from "react";
import { Redirect, Route, Switch } from "react-router";
import RoutePath from "../../../data/RoutePath";

const QuickscanQuestions = React.lazy(() => import("./QuickscanQuestions"));
const QuickscanResults = React.lazy(() => import("./QuickscanResults"));
const OrganizationsPage = React.lazy(() => import("./Organizations"));
const UsersPage = React.lazy(() => import("./Users"));

export default (
  <Switch>
    <Route
      path={RoutePath.Cms.QuickscanQuestions}
      component={QuickscanQuestions}
    />
    <Route path={RoutePath.Cms.Organizations} component={OrganizationsPage} />
    <Route path={RoutePath.Cms.QuickscanResults} component={QuickscanResults} />
    <Route path={RoutePath.Cms.Users} component={UsersPage} />

    <Redirect to={RoutePath.Cms.QuickscanResults} />
  </Switch>
);
