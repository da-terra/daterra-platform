import React, { useContext, useMemo } from "react";
import { Redirect, useParams } from "react-router";
import useGraphql from "../../util/hooks/useGraphql";
import {
  Context as StorageContext,
  StorageKey
} from "../../components/context/StorageManager";
import StatusCode from "../../data/StatusCode";
import RoutePath from "../../data/RoutePath";
import { SplashScreen, BlockRenderer } from "./styled";

// Static data
import profiles from "./profiles";

const graphqlQuery = `
  query quickScanResult($uuid: String) {
    quickScanResult(uuid: $uuid) {
      target
      company {
        companyName
        website
        sector
        region
        employeeCount
      }
      person {
        name
        role
        email
        phone
      }
      answers {
        questionId
        value
      }
      comment
    }
  }
`;

type GraphQLResponse = {
  quickScanResult: IQuickScanResult;
};

const QuickScanProfile = () => {
  const storage = useContext(StorageContext);

  // Create variables for graphql query
  const { uuid } = useParams();
  const graphqlVariables = useMemo(() => ({ uuid }), [uuid]);

  // Process query
  const [data, error] = useGraphql<GraphQLResponse>(
    graphqlQuery,
    graphqlVariables
  );

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
    if (error.status === StatusCode.NotFound) {
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
