import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorProvider from "../context/ErrorManager";
import IntlManager from "../context/IntlManager";
import LayoutProvider from "../context/Layout";
import StorageProvider from "../context/StorageManager";
import ThemeProvider from "../context/ThemeManager";
import TrackingProvider from "../context/TrackingManager";
import WindowResizeProvider from "../context/WindowResizeManager";
import SplashScreen from "../general/SplashScreen";
import routes from "./routes";
import { GlobalStyle } from "./styled";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  credentials: "include"
});

const App: React.FC = () => {
  return (
    <StorageProvider prefix="dsp">
      <ThemeProvider>
        <WindowResizeProvider>
          <TrackingProvider>
            <Router>
              <IntlManager>
                <LayoutProvider>
                  <GlobalStyle gridSize={10} />

                  <ErrorProvider>
                    <ApolloProvider client={client}>
                      <Suspense fallback={<SplashScreen />}>{routes}</Suspense>
                    </ApolloProvider>
                  </ErrorProvider>
                </LayoutProvider>
              </IntlManager>
            </Router>
          </TrackingProvider>
        </WindowResizeProvider>
      </ThemeProvider>
    </StorageProvider>
  );
};

export default App;
