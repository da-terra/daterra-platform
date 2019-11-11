import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Gateway from "../context/Gateway";
import ThemeManager from "../context/ThemeManager";
import StorageManager from "../context/StorageManager";
import WindowResizeManager from "../context/WindowResizeManager";
import { GlobalStyle } from "./styled";
import routes from "./routes";

const App: React.FC = () => {
  return (
    <Router>
      <StorageManager prefix="dsp">
        <ThemeManager>
          <WindowResizeManager>
            <GlobalStyle gridSize={10} />

            <Gateway
              fetchUrl={window.location.origin}
              fetchOptions={{}}
              graphQlUrl="https://studata-api.azurewebsites.net/graphql"
            >
              <Suspense fallback="Loading...">{routes}</Suspense>
            </Gateway>
          </WindowResizeManager>
        </ThemeManager>
      </StorageManager>
    </Router>
  );
};

export default App;
