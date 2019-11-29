import React, { useState, useContext } from "react";
import { Redirect } from "react-router";
import RoutePath from "../../data/RoutePath";
import TargetGroup from "../../data/TargetGroup";
import createPath from "../../util/createPath";
import {
  Context as StorageContext,
  StorageKey
} from "../../components/context/StorageManager";
import ErrorPage from "../Error";
import { SplashScreen } from "./styled";
import { QuickScanContextType, QueryResponse, QuickScanProps } from "./types";
import routes from "./routes";
import useGraphql from "../../util/hooks/useGraphql";

export const Context = React.createContext<QuickScanContextType>({
  progress: 0,
  result: {
    uuid: undefined,
    target: undefined,
    answers: {}
  },

  setProgress: () => {},
  setResult: () => {}
});

const quickScanQuery = (targetGroup: TargetGroup) => `
  {
    quickScanQuestions(target: ${targetGroup}) {
      _id,
      question,
      body,
      min,
      max,
      options {
        label,
        value
      }
    }
  }
`;

const QuickScan: React.FC<QuickScanProps> = () => {
  const [progress, setProgress] = useState<number>(0);
  const [result, setResult] = useState<IQuickScanResultInput>({
    answers: {}
  });

  const storage = useContext(StorageContext);
  const [response, error] = useGraphql<QueryResponse>(
    quickScanQuery(storage.getValue(StorageKey.TargetGroup))
  );

  const context: QuickScanContextType = {
    response,

    progress,
    setProgress,

    result,
    setResult
  };

  /**
   * Show error page when api call returns error
   */
  if (error) {
    return <ErrorPage {...error} />;
  }

  const uuid = storage.getValue(StorageKey.QuickScanResultUuid);

  if (uuid) {
    return <Redirect to={createPath(RoutePath.QuickScanProfile, { uuid })} />;
  }

  /**
   * Show loading screen when fetching data
   */
  if (!response) {
    return <SplashScreen />;
  }

  return <Context.Provider value={context}>{routes}</Context.Provider>;
};

export default QuickScan;
