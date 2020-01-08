import React from "react";
import { Route, Switch } from "react-router-dom";
import RoutePath from "../../data/RoutePath";

// Public Pages
const EventOverview = React.lazy(() =>
  import("../../pages/public/ArticleOverview")
);
const EventDetail = React.lazy(() => import("../../pages/public/EventDetail"));
const ArticleOverview = React.lazy(() =>
  import("../../pages/public/ArticleOverview")
);
const ArticleDetail = React.lazy(() =>
  import("../../pages/public/ArticleDetail")
);
const ContentPage = React.lazy(() => import("../../pages/public/Content"));
const QuickScanPage = React.lazy(() => import("../../pages/public/QuickScan"));
const QuickScanResultDetail = React.lazy(() =>
  import("../../pages/public/QuickScanProfile")
);

const HomePage = React.lazy(() => import("../../pages/public/Home"));
const SigninPage = React.lazy(() => import("../../pages/public/Signin"));

const SettingsPage = React.lazy(() => import("../../pages/protected/Settings"));
const DashboardPage = React.lazy(() =>
  import("../../pages/protected/Dashboard")
);

export default (
  <Switch>
    {/* Public pages */}
    <Route path={RoutePath.Home} exact component={HomePage} />
    <Route path={RoutePath.Signin} exact component={SigninPage} />

    <Route path={RoutePath.EventDetail} component={EventDetail} />
    <Route path={RoutePath.EventOverview} component={EventOverview} />

    <Route path={RoutePath.ArticleDetail} component={ArticleDetail} />
    <Route path={RoutePath.ArticleOverview} component={ArticleOverview} />

    <Route path={RoutePath.QuickScan} component={QuickScanPage} />
    <Route
      path={RoutePath.QuickScanProfile}
      component={QuickScanResultDetail}
    />

    {/* Protected pages */}
    <Route path={RoutePath.Settings} exact component={SettingsPage} />
    <Route path={RoutePath.Dashboard} exact component={DashboardPage} />

    {/* Catch all routes for */}
    <Route path={RoutePath.Content} exact component={ContentPage} />
  </Switch>
);
