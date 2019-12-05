import React, { useContext, useMemo, Fragment } from "react";
import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
import { Context, StorageKey } from "../../components/context/StorageManager";
import { SplashScreen, FeaturedArticleHero, TagWrapper } from "./styled";

const graphqlQuery = loader("./articles.graphql");

// Dynamic import for error page
const ErrorPage = React.lazy(() => import("../Error"));

const ArticleOverview: React.FC = () => {
  const storage = useContext(Context);
  const target = storage.getValue(StorageKey.TargetGroup);

  const variables = useMemo(() => ({ target }), [target]);
  const { loading, data, error } = useQuery(graphqlQuery, { variables });

  if (error) {
    return <ErrorPage apolloError={error} />;
  }

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <Fragment>
      <FeaturedArticleHero {...data.featuredArticle} />

      <TagWrapper tag="Blog">test</TagWrapper>
    </Fragment>
  );
};

export default ArticleOverview;
