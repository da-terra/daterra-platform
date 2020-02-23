import React from "react";
import { Route, Switch } from "react-router-dom";
import RoutePath from "../../data/RoutePath";
import cmsRoutes from "../pages/cms";

// Public Pages
const EventOverview = React.lazy(() => import("../pages/ArticleOverview"));
const EventDetail = React.lazy(() => import("../pages/EventDetail"));
const ArticleOverview = React.lazy(() => import("../pages/ArticleOverview"));
const ArticleDetail = React.lazy(() => import("../pages/ArticleDetail"));
const ContentPage = React.lazy(() => import("../pages/Content"));
const QuickscanPage = React.lazy(() => import("../pages/Quickscan"));
const QuickscanResultDetail = React.lazy(() =>
  import("../pages/QuickscanProfile")
);

// Protected
const HomePage = React.lazy(() => import("../pages/Home"));
const SigninPage = React.lazy(() => import("../pages/Signin"));
const DashboardPage = React.lazy(() => import("../pages/Dashboard"));
const ProfilePage = React.lazy(() => import("../pages/Profile"));

export default (
  <Switch>
    {/* Public pages */}
    <Route path={RoutePath.Home} exact component={HomePage} />
    <Route path={RoutePath.Signin} exact component={SigninPage} />

    <Route path={RoutePath.EventDetail} component={EventDetail} />
    <Route path={RoutePath.EventOverview} exact component={EventOverview} />

    <Route path={RoutePath.ArticleDetail} component={ArticleDetail} />
    <Route path={RoutePath.ArticleOverview} exact component={ArticleOverview} />

    <Route path={RoutePath.Quickscan} component={QuickscanPage} />
    <Route
      exact
      path={RoutePath.QuickscanProfile}
      component={QuickscanResultDetail}
    />

    {/* Protected pages */}
    <Route path={RoutePath.Dashboard} exact component={DashboardPage} />
    <Route path={RoutePath.Profile} component={ProfilePage} />

    {/* CMS Pages */}
    <Route path={RoutePath.CmsIndex}>{cmsRoutes}</Route>

    {/* Catch all routes for */}
    <Route path={RoutePath.Content} exact component={ContentPage} />
  </Switch>
);
