import React, { Suspense } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorManager from "../context/ErrorManager";
import Layout from "../context/Layout";
import StorageManager from "../context/StorageManager";
import ThemeManager from "../context/ThemeManager";
import WindowResizeManager from "../context/WindowResizeManager";
import { SplashScreen, GlobalStyle } from "./styled";
import routes from "./routes";

const client = new ApolloClient({
  uri: "https://studata-api.azurewebsites.net/graphql"
});

const App: React.FC = () => {
  return (
    <Router>
      <StorageManager prefix="dsp">
        <ThemeManager>
          <WindowResizeManager>
            <Layout>
              <GlobalStyle gridSize={10} />

              <ErrorManager>
                <ApolloProvider client={client}>
                  <Suspense fallback={<SplashScreen />}>{routes}</Suspense>
                </ApolloProvider>
              </ErrorManager>
            </Layout>
          </WindowResizeManager>
        </ThemeManager>
      </StorageManager>
    </Router>
  );
};

export default App;
