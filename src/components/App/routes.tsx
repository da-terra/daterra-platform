import React from "react";
import { Route, Switch } from "react-router-dom";
import RoutePath from "../../data/RoutePath";

// Demo page
const Blocks = React.lazy(() => import("./blocks"));

// Pages
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

    <Route path="/test" component={Blocks} />

    {/* QuickScan */}
    <Route path={RoutePath.QuickScan} component={QuickScanPage} />

    <Route
      path={RoutePath.QuickScanProfile}
      component={QuickScanResultDetail}
    />

    {/* Catch all routes for  */}
    <Route
      path={[RoutePath.Content, RoutePath.All]}
      exact
      component={ContentPage}
    />
  </Switch>
);
