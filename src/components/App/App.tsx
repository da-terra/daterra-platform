import React, { Suspense } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import themes from "../../data/style/themes";
import ThemeManager from "../ThemeManager";

const LandingPage = React.lazy(() => import("../../pages/Landing"));
const SettingsPage = React.lazy(() => import("../../pages/Settings"));

const Wrapper = styled.div`
  color: ${props => props.theme.foregroundColor};
  background: ${props => props.theme.backgroundColor};
  min-height: 100vh;
`;

const App: React.FC = () => {
  return (
    <Router>
      <ThemeManager themes={themes}>
        <Wrapper>
          <Suspense fallback="Loading...">
            <Switch>
              <Route path="/" exact component={LandingPage} />
              <Route path="/settings" exact component={SettingsPage} />
            </Switch>
          </Suspense>
        </Wrapper>
      </ThemeManager>
    </Router>
  );
};

export default App;
