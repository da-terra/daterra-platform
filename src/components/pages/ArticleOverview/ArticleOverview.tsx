import { useQuery } from "@apollo/react-hooks";
import { IArticle } from "@data-science-platform/shared";
import { loader } from "graphql.macro";
import React, { Fragment, useContext } from "react";
import CallToAction from "../../../components/blocks/CallToAction";
import Footer from "../../../components/blocks/Footer";
import {
  Context,
  StorageKey
} from "../../../components/context/StorageManager";
import FeaturedArticleHero from "../../blocks/FeaturedArticleHero";
import SplashScreen from "../../general/SplashScreen";
import { OverviewArticlesList } from "./styled";

const graphqlQuery = loader("./articles.graphql");

type QueryResponse = {
  articles: IArticle[];
  featuredArticle: IArticle;
};

const ArticleOverview: React.FC = () => {
  const storage = useContext(Context);
  const target = storage.getValue(StorageKey.TargetGroup);

  const { loading, data, error } = useQuery<QueryResponse>(graphqlQuery, {
    variables: { target }
  });

  if (error) {
    throw error;
  }

  if (loading || !data) {
    return <SplashScreen />;
  }

  return (
    <Fragment>
      <FeaturedArticleHero {...data.featuredArticle} inverted />

      <OverviewArticlesList articles={data.articles} tag="Blog" />

      <CallToAction
        title={"Is mijn organisatie klaar\nvoor Data Science?"}
        link={{
          children: "Doe de quickscan",
          title: "Doe de quickscan",
          href: "/quickscan",
          target: "_self"
        }}
        shape={{
          alt: "Background shape",
          src: "/cta-shape.png"
        }}
      />

      <Footer inverted />
    </Fragment>
  );
};

export default ArticleOverview;
