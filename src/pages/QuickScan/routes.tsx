import React from "react";
import { Switch, Route, Redirect } from "react-router";
import RoutePath from "../../data/RoutePath";

// Steps
const QuickScanOnboarding = React.lazy(() =>
  import("./steps/QuickScanOnboarding")
);
const QuickScanQuestions = React.lazy(() =>
  import("./steps/QuickScanQuestions")
);
const QuickScanContactDetails = React.lazy(() =>
  import("./steps/QuickScanContactDetails")
);
const QuickScanResult = React.lazy(() => import("./steps/QuickScanResult"));

export default (
  <Switch>
    <Route
      path={RoutePath.QuickScanOnboarding} //
      component={QuickScanOnboarding}
    />
    <Route
      path={RoutePath.QuickScanQuestions} //
      component={QuickScanQuestions}
    />
    <Route
      path={RoutePath.QuickScanContactDetails} //
      component={QuickScanContactDetails}
    />
    <Route
      path={RoutePath.QuickScanResult} //
      component={QuickScanResult}
    />

    <Redirect to={RoutePath.QuickScanOnboarding} />
  </Switch>
);
