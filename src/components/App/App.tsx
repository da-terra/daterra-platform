import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorManager from "../context/ErrorManager";
import Gateway from "../context/Gateway";
import Layout from "../context/Layout";
import StorageManager from "../context/StorageManager";
import ThemeManager from "../context/ThemeManager";
import WindowResizeManager from "../context/WindowResizeManager";
import { SplashScreen, GlobalStyle } from "./styled";
import routes from "./routes";

const App: React.FC = () => {
  return (
    <Router>
      <StorageManager prefix="dsp">
        <ThemeManager>
          <WindowResizeManager>
            <Layout>
              <GlobalStyle gridSize={10} />

              <ErrorManager>
                <Gateway
                  fetchUrl={window.location.origin}
                  fetchOptions={{}}
                  graphQlUrl="https://studata-api.azurewebsites.net/graphql"
                >
                  <Suspense fallback={<SplashScreen />}>{routes}</Suspense>
                </Gateway>
              </ErrorManager>
            </Layout>
          </WindowResizeManager>
        </ThemeManager>
      </StorageManager>
    </Router>
  );
};

export default App;
