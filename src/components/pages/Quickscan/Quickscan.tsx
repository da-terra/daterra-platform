import { useQuery } from "@apollo/react-hooks";
import { createPath } from "@data-science-platform/shared";
import { loader } from "graphql.macro";
import React, { useContext, useState } from "react";
import { Redirect } from "react-router";
import {
  Context as StorageContext,
  StorageKey
} from "../../../components/context/StorageManager";
import RoutePath from "../../../data/RoutePath";
import SplashScreen from "../../general/SplashScreen";
import routes from "./routes";
import { QueryResponse, QuickscanContextType, QuickscanProps } from "./types";

const graphqlQuery = loader("./quickscan.graphql");

export const Context = React.createContext<QuickscanContextType>({
  progress: 0,
  result: {
    uuid: undefined,
    target: undefined,
    answers: {}
  },

  setProgress: () => {},
  setResult: () => {}
});

const Quickscan: React.FC<QuickscanProps> = () => {
  const storage = useContext(StorageContext);

  const [progress, setProgress] = useState<number>(0);
  const [result, setResult] = useState<IQuickscanResultInput>({
    answers: {}
  });

  const variables = { target: storage.getValue(StorageKey.TargetGroup) };

  const { loading, data, error } = useQuery<QueryResponse>(graphqlQuery, {
    variables
  });

  const context: QuickscanContextType = {
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
    throw error;
  }

  const uuid = storage.getValue(StorageKey.QuickscanResultUuid);

  if (uuid) {
    return <Redirect to={createPath(RoutePath.QuickscanProfile, { uuid })} />;
  }

  /**
   * Show loading screen when fetching data
   */
  if (loading) {
    return <SplashScreen />;
  }

  return <Context.Provider value={context}>{routes}</Context.Provider>;
};

export default Quickscan;
