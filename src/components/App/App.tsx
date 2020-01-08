import React, { Suspense } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorProvider from "../context/ErrorManager";
import LayoutProvider from "../context/Layout";
import StorageProvider from "../context/StorageManager";
import ThemeProvider from "../context/ThemeManager";
import TrackingProvider from "../context/TrackingManager";
import WindowResizeProvider from "../context/WindowResizeManager";
import { SplashScreen, GlobalStyle } from "./styled";
import routes from "./routes";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  credentials: "include"
});

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <WindowResizeProvider>
        <StorageProvider prefix="dsp">
          <TrackingProvider>
            <Router>
              <LayoutProvider>
                <GlobalStyle gridSize={10} />

                <ErrorProvider>
                  <ApolloProvider client={client}>
                    <Suspense fallback={<SplashScreen />}>{routes}</Suspense>
                  </ApolloProvider>
                </ErrorProvider>
              </LayoutProvider>
            </Router>
          </TrackingProvider>
        </StorageProvider>
      </WindowResizeProvider>
    </ThemeProvider>
  );
};

export default App;
