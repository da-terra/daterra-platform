import React, { useState, useContext } from "react";
import { Redirect } from "react-router";
import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
import RoutePath from "../../../data/RoutePath";
import createPath from "../../../util/createPath";
import {
  Context as StorageContext,
  StorageKey
} from "../../../components/context/StorageManager";
import ErrorPage from "../../Error";
import { SplashScreen } from "./styled";
import { QuickScanContextType, QueryResponse, QuickScanProps } from "./types";
import routes from "./routes";

const graphqlQuery = loader("./quickscan.graphql");

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

const QuickScan: React.FC<QuickScanProps> = () => {
  const storage = useContext(StorageContext);

  const [progress, setProgress] = useState<number>(0);
  const [result, setResult] = useState<IQuickscanResultInput>({
    answers: {}
  });

  const variables = { target: storage.getValue(StorageKey.TargetGroup) };

  const { loading, data, error } = useQuery<QueryResponse>(graphqlQuery, {
    variables
  });

  const context: QuickScanContextType = {
    data,

    progress,
    setProgress,

    result,
    setResult
  };

  /**
   * Show error page when api call returns error
   */
  if (error) {
    return <ErrorPage apolloError={error} />;
  }

  const uuid = storage.getValue(StorageKey.QuickScanResultUuid);

  if (uuid) {
    return <Redirect to={createPath(RoutePath.QuickScanProfile, { uuid })} />;
  }

  /**
   * Show loading screen when fetching data
   */
  if (loading) {
    return <SplashScreen />;
  }

  return <Context.Provider value={context}>{routes}</Context.Provider>;
};

export default QuickScan;
