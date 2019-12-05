import React from "react";
import { Route, Switch } from "react-router-dom";
import RoutePath from "../../data/RoutePath";

// Demo page
const Blocks = React.lazy(() => import("./blocks"));

// Pages
const ArticleOverview = React.lazy(() => import("../../pages/ArticleOverview"));
const ArticleDetail = React.lazy(() => import("../../pages/ArticleDetail"));
const ContentPage = React.lazy(() => import("../../pages/Content"));
const QuickScanPage = React.lazy(() => import("../../pages/QuickScan"));
const QuickScanResultDetail = React.lazy(() =>
  import("../../pages/QuickScanProfile")
);
const SettingsPage = React.lazy(() => import("../../pages/Settings"));
const SigninPage = React.lazy(() => import("../../pages/Signin"));
const DashboardPage = React.lazy(() => import("../../pages/Dashboard"));
const ForgotPassword = React.lazy(() => import("../../pages/ForgotPassword"));

export default (
  <Switch>
    {/* Platform */}
    <Route path={RoutePath.Settings} exact component={SettingsPage} />
    <Route path={RoutePath.Dashboard} exact component={DashboardPage} />

    {/* Account */}
    <Route path={RoutePath.Signin} exact component={SigninPage} />
    <Route path={RoutePath.ForgetPassword} exact component={ForgotPassword} />

    {/* Blog */}
    <Route path={RoutePath.ArticleDetail} component={ArticleDetail} />
    <Route path={RoutePath.ArticleOverview} component={ArticleOverview} />

    {/* QuickScan */}
    <Route path={RoutePath.QuickScan} component={QuickScanPage} />

    <Route
      path={RoutePath.QuickScanProfile}
      component={QuickScanResultDetail}
    />

    {/* Debugging */}
    <Route path="/Debug" component={Blocks} />

    {/* Catch all routes for  */}
    <Route
      path={[RoutePath.Content, RoutePath.All]}
      exact
      component={ContentPage}
    />
  </Switch>
);
