import React, { Fragment } from "react";
import { useQuery } from "@apollo/react-hooks";
import { IArticle } from "@data-science-platform/shared";
import { useParams } from "react-router";
import { loader } from "graphql.macro";
import { SplashScreen, ArticleHero, ArticleHeading } from "./styled";
import RichText from "../../../components/blocks/RichText";

const graphqlQuery = loader("./article.graphql");

// Dynamic import for error page
const ErrorPage = React.lazy(() => import("../../Error"));

type QueryResponse = {
  article: IArticle;
};

const ArticleOverview: React.FC = () => {
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

  const [richText] = data.article.richText;

  return (
    <Fragment>
      <ArticleHero {...data.article} inverted />

      <ArticleHeading {...data.article} />

      <RichText nodes={JSON.parse(richText.nodes)} />
    </Fragment>
  );
};

export default ArticleOverview;
