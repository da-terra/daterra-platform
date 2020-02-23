import React from "react";
import { Switch, Route, Redirect } from "react-router";
import RoutePath from "../../../data/RoutePath";

// Steps
const QuickscanOnboarding = React.lazy(() =>
  import("./steps/QuickscanOnboarding")
);
const QuickscanQuestions = React.lazy(() =>
  import("./steps/QuickscanQuestions")
);
const QuickscanContactDetails = React.lazy(() =>
  import("./steps/QuickscanContactDetails")
);
const QuickscanResult = React.lazy(() => import("./steps/QuickscanResult"));

export default (
  <Switch>
    <Route
      path={RoutePath.QuickscanOnboarding} //
      component={QuickscanOnboarding}
    />
    <Route
      path={RoutePath.QuickscanQuestions} //
      component={QuickscanQuestions}
    />
    <Route
      path={RoutePath.QuickscanContactDetails} //
      component={QuickscanContactDetails}
    />
    <Route
      path={RoutePath.QuickscanResult} //
      component={QuickscanResult}
    />

    <Redirect to={RoutePath.QuickscanOnboarding} />
  </Switch>
);
