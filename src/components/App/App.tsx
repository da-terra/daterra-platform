import React, { Suspense, Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ThemeManager from "../ThemeManager";
import Gateway from "../Gateway";
import { GlobalStyle } from "./styled";
import routes from "./routes";

const App: React.FC = () => {
  return (
    <Router>
      <Fragment>
        <ThemeManager>
          <Fragment>
            <GlobalStyle gridSize={10} />

            <Gateway
              fetchUrl={window.location.origin}
              fetchOptions={{}}
              graphQlUrl="https://studata-api.azurewebsites.net/graphql"
            >
              <Suspense fallback="Loading...">{routes}</Suspense>
            </Gateway>
          </Fragment>
        </ThemeManager>
      </Fragment>
    </Router>
  );
};

export default App;
