import React, { useContext, Fragment } from "react";
import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
import { Context, StorageKey } from "../../components/context/StorageManager";
import {
  SplashScreen,
  FeaturedArticleHero,
  OverviewArticlesList
} from "./styled";
import CallToAction from "../../components/blocks/CallToAction";

const graphqlQuery = loader("./articles.graphql");

// Dynamic import for error page
const ErrorPage = React.lazy(() => import("../Error"));

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
    return <ErrorPage apolloError={error} />;
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
    </Fragment>
  );
};

export default ArticleOverview;
