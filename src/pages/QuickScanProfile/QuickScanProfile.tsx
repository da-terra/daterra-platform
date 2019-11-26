import React, { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import useGraphql from "../../util/hooks/useGraphql";
import {
  Context as StorageContext,
  StorageKey
} from "../../components/context/StorageManager";
import StatusCode from "../../data/StatusCode";
import RoutePath from "../../data/RoutePath";
import { Redirect } from "react-router";

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

const QuickScanProfile = () => {
  const storage = useContext(StorageContext);

  // Create variables for graphql query
  const { uuid } = useParams();
  const graphqlVariables = useMemo(() => ({ uuid }), [uuid]);

  // Process query
  const [data, error] = useGraphql<IQuickScanResult>(
    graphqlQuery,
    graphqlVariables
  );

  if (error) {
    // Clear key and redirect to quick scan if profile does not exist
    if (error.status === StatusCode.NotFound) {
      storage.removeValue(StorageKey.QuickScanResultUuid);

      return <Redirect to={RoutePath.QuickScan} />;
    }

    throw error;
  }

  return <div>{JSON.stringify(data)}</div>;
};

export default QuickScanProfile;