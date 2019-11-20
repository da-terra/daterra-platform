import React, { useState } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router";
import RoutePath from "../../data/RoutePath";
import { Page, Header } from "./styled";

// Steps
const QuickScanOnboarding = React.lazy(() =>
  import("./steps/QuickScanOnboarding")
);

type QuickScanContextType = {
  progress: number;
  setProgress: (value: number) => void;
};

const QuickScanContext = React.createContext<QuickScanContextType>({
  progress: 0,
  setProgress: () => {}
});

type QuickScanProps = {
  children: React.ReactNode;
};

const quickScanRoutes = [
  RoutePath.QuickScanOnboarding,
  RoutePath.QuickScanQuestions,
  RoutePath.QuickScanContactDetails,
  RoutePath.QuickScanResult
];

const QuickScan: React.FC<QuickScanProps> = ({ children }) => {
  let location = useLocation();

  const [progress, setProgress] = useState<number>(0);

  const context = {
    progress,
    setProgress
  };

  /**
   * Go to first step if we're on the catch-all quickscan route
   */
  if (!quickScanRoutes.includes(location.pathname as RoutePath)) {
    return <Redirect to={RoutePath.QuickScanOnboarding} />;
  }

  return (
    <Page>
      <Header />

      <QuickScanContext.Provider value={context}>
        <Switch>
          <Route
            path={RoutePath.QuickScanOnboarding}
            component={QuickScanOnboarding}
          />
          <Route
            path={RoutePath.QuickScanQuestions}
            component={() => <div>QuickScanQuestions</div>}
          />
          <Route
            path={RoutePath.QuickScanContactDetails}
            component={() => <div>QuickScanContactDetails</div>}
          />
          <Route
            path={RoutePath.QuickScanResult}
            component={() => <div>QuickScanResult</div>}
          />
        </Switch>
      </QuickScanContext.Provider>
    </Page>
  );
};

export default QuickScan;
