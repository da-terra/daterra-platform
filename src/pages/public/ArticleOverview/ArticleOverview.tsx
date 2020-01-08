import React, { useContext, Fragment } from "react";
import { IArticle } from "@data-science-platform/shared";
import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
import {
  Context,
  StorageKey
} from "../../../components/context/StorageManager";
import CallToAction from "../../../components/blocks/CallToAction";
import Footer from "../../../components/blocks/Footer";
import {
  SplashScreen,
  FeaturedArticleHero,
  OverviewArticlesList
} from "./styled";

const graphqlQuery = loader("./articles.graphql");

// Dynamic import for error page
const ErrorPage = React.lazy(() => import("../../Error"));

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

      <Footer
        disclaimer="Data Science Platform - Copyright 2019"
        sitemap={[
          {
            uuid: "1",
            tag: "Blog",
            links: [
              {
                uuid: "1",
                children: "Blog",
                title: "Blog",
                href: "/article",
                target: "_blank"
              }
            ]
          },
          {
            uuid: "2",
            tag: "Algemeen",
            links: [
              {
                uuid: "1",
                children: "Algemene voorwaarden",
                title: "Algemene voorwaarden",
                href: "/algemene-voorwaarden",
                target: "_blank"
              },
              {
                uuid: "2",
                children: "Privacy policy",
                title: "Privacy policy",
                href: "/privacy-policy",
                target: "_blank"
              }
            ]
          }
        ]}
        socialNetworks={[
          {
            uuid: "1",
            image: {
              src: "/socialNetworks/linkedIn-dark.svg",
              fallbackColor: "transparent",
              alt: "LinkedIn logo"
            },
            link: {
              children: "",
              title: "LinkedIn",
              href: "https://www.linkedin.com/company/studata/"
            }
          }
        ]}
        inverted
      />
    </Fragment>
  );
};

export default ArticleOverview;
