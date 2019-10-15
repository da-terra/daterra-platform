import React, { Suspense, Fragment } from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FontFamily } from "../../data/style/variables";
import RoutePath from "../../data/RoutePath";
import ThemeManager from "../ThemeManager";

const LandingPage = React.lazy(() => import("../../pages/Landing"));
const SettingsPage = React.lazy(() => import("../../pages/Settings"));
const SigninPage = React.lazy(() => import("../../pages/Signin"));
const ForgetPassword = React.lazy(() => import("../../pages/ForgetPassword"));
const ErrorPage = React.lazy(() => import("../../pages/Error"));

const GlobalStyle = createGlobalStyle<{ gridSize: number }>`
  html,
  body {
    /* Grid size is defined using the font-size */
    font-size: ${props => props.gridSize}px;
  }

  body {
    font-family: ${FontFamily.ROBOTO};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }

  svg {
    fill: currentColor;
    min-width: 24px;
    min-height: 24px;
  }
`;

const App: React.FC = () => {
  return (
    <Router>
      <Fragment>
        <GlobalStyle gridSize={10} />

        <ThemeManager>
          <Suspense fallback="Loading...">
            <Switch>
              <Route path={RoutePath.Home} exact component={LandingPage} />
              <Route path={RoutePath.Settings} exact component={SettingsPage} />
              <Route path={RoutePath.Signin} exact component={SigninPage} />
              <Route
                path={RoutePath.ForgetPassword}
                exact
                component={ForgetPassword}
              />

              <Route path={RoutePath.All} status={404} component={ErrorPage} />
            </Switch>
          </Suspense>
        </ThemeManager>
      </Fragment>
    </Router>
  );
};

export default App;
