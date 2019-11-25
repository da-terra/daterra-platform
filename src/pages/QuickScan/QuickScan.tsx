import React, { Fragment, useState, useEffect, useContext } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router";
import { Context as GatewayContext } from "../../components/context/Gateway";
import {
  Context as StorageContext,
  StorageKey
} from "../../components/context/StorageManager";
import RoutePath from "../../data/RoutePath";
import TargetGroup from "../../data/TargetGroup";
import ErrorPage from "../Error";
import { Header, SplashScreen } from "./styled";

// Steps
const QuickScanOnboarding = React.lazy(() =>
  import("./steps/QuickScanOnboarding")
);
const QuickScanQuestions = React.lazy(() =>
  import("./steps/QuickScanQuestions")
);

type QuickScanProps = {
  children: React.ReactNode;
};

type QueryResponse = {
  quickScanQuestions: IQuickScanQuestions;
};

export type QuickScanContextType = {
  progress: number;
  formData?: FormData;
  response?: QueryResponse;
  setProgress: (value: number) => void;
  setFormData: (formData: FormData) => void;
};

export const QuickScanContext = React.createContext<QuickScanContextType>({
  progress: 0,
  setProgress: () => {},
  setFormData: () => {}
});

const quickScanQuery = (targetGroup: TargetGroup) => `
  {
    quickScanQuestions(target: ${targetGroup}) {
      _id,
      question,
      body,
      minScore,
      maxScore,
      options {
        label,
        score
      }
    }
  }
`;

const QuickScan: React.FC<QuickScanProps> = ({ children }) => {
  const location = useLocation();

  const gateway = useContext(GatewayContext);
  const storage = useContext(StorageContext);

  const [error, setError] = useState();
  const [formData, setFormData] = useState<FormData>(new FormData());
  const [progress, setProgress] = useState<number>(0);
  const [response, setResponse] = useState<QueryResponse>();

  const context = {
    progress,
    setProgress,
    formData,
    setFormData,
    response
  };

  useEffect(() => {
    const targetGroup = storage.getValue(StorageKey.TargetGroup);

    setError(undefined);

    gateway
      .query(quickScanQuery(targetGroup), undefined, "POST")
      .then(async response => {
        const data = await response.json();

        setResponse(data.data);
      })
      .catch(async errorResponse =>
        setError({
          status: errorResponse.status,
          errors: await errorResponse.json()
        })
      );
  }, [gateway, storage]);

  /**
   * Show error page when api call returns error
   */
  if (error) {
    return <ErrorPage {...error} />;
  }

  /**
   * Go to first step if we're on the catch-all quickscan route
   */
  if (
    ![
      RoutePath.QuickScanOnboarding,
      RoutePath.QuickScanQuestions,
      RoutePath.QuickScanContactDetails,
      RoutePath.QuickScanResult
    ].includes(location.pathname as RoutePath)
  ) {
    return <Redirect to={RoutePath.QuickScanOnboarding} />;
  }

  /**
   * Show loading screen when fetching data
   */
  if (!response) {
    return <SplashScreen />;
  }

  return (
    <Fragment>
      <Header />

      <QuickScanContext.Provider value={context}>
        <Switch>
          <Route
            path={RoutePath.QuickScanOnboarding}
            component={QuickScanOnboarding}
          />
          <Route
            path={RoutePath.QuickScanQuestions}
            component={QuickScanQuestions}
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
    </Fragment>
  );
};

export default QuickScan;
