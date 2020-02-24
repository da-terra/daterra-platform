import { useQuery } from "@apollo/react-hooks";
import { IQuickscanResult } from "@data-science-platform/shared";
import { loader } from "graphql.macro";
import React, { useContext, useMemo } from "react";
import { Redirect, useParams } from "react-router";
import {
  Context as StorageContext,
  StorageKey
} from "../../../components/context/StorageManager";
import RoutePath from "../../../data/RoutePath";
import StatusCode from "../../../data/StatusCode";
import BlockRenderer from "../../blocks";
import SplashScreen from "../../general/SplashScreen";
// Static data
import profiles from "./profiles";
import Footer from "../../blocks/Footer";

const quickscanProfileQuery = loader("./quickscanProfile.graphql");

type GraphQLResponse = {
  quickscanResult: IQuickscanResult;
};

const QuickscanProfile = () => {
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

    const score = data.quickscanResult.answers.reduce(
      (accumulator, current) => accumulator + current.value,
      0
    );

    return profiles
      .sort((a, b) => a.scoreRange[1] - b.scoreRange[1])
      .find(profile => profile.scoreRange[1] > score);
  }, [data]);

  if (error) {
    const notFound = error.graphQLErrors.some(
      error => error.extensions!.code === StatusCode.NotFound
    );

    // Clear key and redirect to quick scan if profile does not exist
    if (notFound) {
      storage.removeValue(StorageKey.QuickscanResultUuid);

      return <Redirect to={RoutePath.Quickscan} />;
    }

    throw error;
  }

  if (!profile) {
    return <SplashScreen />;
  }

  return (
    <>
      <BlockRenderer {...profile} context={profile} />;
      <Footer />
    </>
  );
};

export default QuickscanProfile;
