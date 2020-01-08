import React, { Fragment, useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
import RoutePath from "../../../data/RoutePath";
import {
  Context as StorageContext,
  StorageKey
} from "../../../components/context/StorageManager";
import { SplashScreen } from "./styled";

// Blocks
import Hero from "../../../components/blocks/Hero";
import ArticlesList from "../../../components/blocks/ArticlesList";
import CallToAction from "../../../components/blocks/CallToAction";
import FeaturedEvents from "../../../components/blocks/FeaturedEvents";

const contentQuery = loader("./home.graphql");

const HomePage: React.FC = () => {
  const storage = useContext(StorageContext);

  const queryVariables = {
    target: storage.getValue(StorageKey.TargetGroup)
  };

  const { loading, data } = useQuery(contentQuery, {
    variables: queryVariables,
    errorPolicy: "all"
  });

  if (loading && data == null) {
    return <SplashScreen />;
  }

  return (
    <Fragment>
      <Hero slogan="Zet data in werking" me={data?.me} />

      <ArticlesList
        tag="Blog"
        title={`Wat kan Data Science\n voor jou betekenen?`}
        body="Data Science is een manier van werken waarbij de data uit uw bedrijf wordt verwerkt en daardoor waardevolle inzichten oplevert. Kijk voor voorbeelden in onze blogs."
        articles={data?.articles}
      />

      <CallToAction
        title={`Is mijn organisatie klaar\nvoor Data Science?`}
        shape={{
          src: "./cta-shape.png",
          alt: ""
        }}
        link={{
          href: RoutePath.QuickScan,
          children: "Doe de quickscan"
        }}
      />

      <FeaturedEvents
        title="Kom naar de volgende bijeenkomst(en)"
        body="Kom gezellig met experts, studenten en verschillende bedrijven praten over een gezamenlijke interesse: Data Science."
        tag="Events"
        events={data?.events}
      />
    </Fragment>
  );
};

export default HomePage;
