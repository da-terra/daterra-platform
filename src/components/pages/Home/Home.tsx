import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
import React, { Fragment, useContext } from "react";
import RoutePath from "../../../data/RoutePath";
import ArticlesList from "../../blocks/ArticlesList";
import CallToAction from "../../blocks/CallToAction";
import FeaturedEvents from "../../blocks/FeaturedEvents";
import Footer from "../../blocks/Footer";
import Hero from "../../blocks/Hero";
import {
  Context as StorageContext,
  StorageKey
} from "../../context/StorageManager";
import SplashScreen from "../../general/SplashScreen";

const contentQuery = loader("./home.graphql");

const HomePage: React.FC = () => {
  const storage = useContext(StorageContext);

  const queryVariables = {
    target: storage.getValue(StorageKey.TargetGroup)
  };

  const { loading, data, error } = useQuery(contentQuery, {
    variables: queryVariables,
    errorPolicy: "ignore"
  });

  if (error) {
    throw error;
  }

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
          href: RoutePath.Quickscan,
          children: "Doe de quickscan"
        }}
      />

      {data?.events.length && (
        <FeaturedEvents
          title="Kom naar de volgende bijeenkomst(en)"
          body="Kom gezellig met experts, studenten en verschillende bedrijven praten over een gezamenlijke interesse: Data Science."
          tag="Events"
          events={data?.events}
        />
      )}

      <Footer inverted />
    </Fragment>
  );
};

export default HomePage;
