import React, { Fragment } from "react";
import { useQuery } from "@apollo/react-hooks";
import { IEvent } from "@data-science-platform/shared";
import { useParams } from "react-router";
import { loader } from "graphql.macro";
import { SplashScreen, EventHero, RichText } from "./styled";

const graphqlQuery = loader("./eventDetail.graphql");

// Dynamic import for error page
const ErrorPage = React.lazy(() => import("../../Error"));

type QueryResponse = {
  event: IEvent;
};

const EventDetail: React.FC = () => {
  const { slug } = useParams();

  const { loading, data, error } = useQuery<QueryResponse>(graphqlQuery, {
    variables: { slug }
  });

  if (error) {
    return <ErrorPage apolloError={error} />;
  }

  if (loading || !data) {
    return <SplashScreen />;
  }

  const [richText] = data.event.richText;

  return (
    <Fragment>
      <EventHero {...data.event} />
      {richText && <RichText nodes={JSON.parse(richText.nodes)} />}
    </Fragment>
  );
};

export default EventDetail;
