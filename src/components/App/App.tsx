import React, { Suspense, Fragment } from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FontFamily } from "../../data/style/variables";
import RoutePath from "../../data/RoutePath";
import ThemeManager from "../ThemeManager";
import Gateway from "../Gateway";

const ContentPage = React.lazy(() => import("../../pages/ContentPage"));
const SettingsPage = React.lazy(() => import("../../pages/Settings"));
const SigninPage = React.lazy(() => import("../../pages/Signin"));
const DashboardPage = React.lazy(() => import("../../pages/Dashboard"));
const ForgotPassword = React.lazy(() => import("../../pages/ForgotPassword"));

const GlobalStyle = createGlobalStyle<{ gridSize: number }>`
  html,
  body {
    /* Grid size is defined using the font-size */
    font-size: ${props => props.gridSize}px;
  }

  body {
    font-family: ${FontFamily.Roboto};
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
          <Gateway  fetchUrl={window.location.origin} fetchOptions={{}} graphQlUrl="http://localhost:4000/graphql">
            <Suspense fallback="Loading...">
                <Switch>
                  <Route path={RoutePath.Settings} exact component={SettingsPage} />
                  <Route path={RoutePath.Signin} exact component={SigninPage} />
                  <Route
                    path={RoutePath.ForgetPassword}
                    exact
                    component={ForgotPassword}
                  />

                  {/* Dashboard */}
                  <Route
                    path={RoutePath.Dashboard}
                    exact
                    component={DashboardPage}
                  />

                  <Route path={RoutePath.ContentPage} exact component={ContentPage} />
                  <Route path={RoutePath.All} exact component={ContentPage} />
                </Switch>
              </Suspense>
            </Gateway>
        </ThemeManager>
      </Fragment>
    </Router>
  );
};

export default App;
