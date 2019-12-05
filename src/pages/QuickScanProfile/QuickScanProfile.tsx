import React, { useContext, useMemo } from "react";
import { Redirect, useParams } from "react-router";
import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
import {
  Context as StorageContext,
  StorageKey
} from "../../components/context/StorageManager";
import StatusCode from "../../data/StatusCode";
import RoutePath from "../../data/RoutePath";
import { SplashScreen, BlockRenderer } from "./styled";

// Static data
import profiles from "./profiles";

const quickscanProfileQuery = loader("./quickscanProfile.graphql");

type GraphQLResponse = {
  quickScanResult: IQuickScanResult;
};

const QuickScanProfile = () => {
  const storage = useContext(StorageContext);

  // Create variables for graphql query
  const { uuid } = useParams();

  // Process query
  const { data, error } = useQuery<GraphQLResponse>(quickscanProfileQuery, {
    variables: { uuid }
  });

  const profile = useMemo(() => {
    if (!data) {
      return undefined;
    }

    const score = data.quickScanResult.answers.reduce(
      (accumulator, current) => accumulator + current.value,
      0
    );

    return profiles
      .sort((a, b) => a.scoreRange[1] - b.scoreRange[1])
      .find(profile => profile.scoreRange[1] > score);
  }, [data]);

  if (error) {
    // Clear key and redirect to quick scan if profile does not exist
    if (error.name === StatusCode.NotFound) {
      storage.removeValue(StorageKey.QuickScanResultUuid);

      return <Redirect to={RoutePath.QuickScan} />;
    }

    throw error;
  }

  if (!profile) {
    return <SplashScreen />;
  }

  return <BlockRenderer {...profile} context={profile} />;
};

export default QuickScanProfile;
