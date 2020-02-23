import { useQuery } from "@apollo/react-hooks";
import { IEvent } from "@data-science-platform/shared";
import { loader } from "graphql.macro";
import React, { Fragment } from "react";
import { useParams } from "react-router";
import EventHero from "../../blocks/EventHero";
import RichText from "../../blocks/RichText";
import SplashScreen from "../../general/SplashScreen";

const graphqlQuery = loader("./eventDetail.graphql");

type QueryResponse = {
  event: IEvent;
};

const EventDetail: React.FC = () => {
  const { slug } = useParams();

  const { loading, data, error } = useQuery<QueryResponse>(graphqlQuery, {
    variables: { slug }
  });

  if (error) {
    throw error;
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
