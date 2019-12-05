import React, { Fragment } from "react";

import ArticleHero from "../blocks/ArticleHero";
import RichText from "../blocks/RichText";
import ArticleHeading from "../blocks/ArticleHeading";
import FeaturedArticleHero from "../blocks/FeaturedArticleHero";

export default () => (
  <Fragment>
    <ArticleHero
      image={{
        alt: "Background",
        fallbackColor: "#4282EA",
        src: "https://source.unsplash.com/1920x1080/?dark"
      }}
      inverted
    />

    <ArticleHero
      image={{
        alt: "Background",
        fallbackColor: "#FD4444",
        src: "https://source.unsplash.com/1920x1080/?white"
      }}
    />

    <FeaturedArticleHero
      image={{
        alt: "Background",
        fallbackColor: "#FD4444",
        src: "https://source.unsplash.com/1920x1080/?dark"
      }}
      author={{
        fullName: "Leroy Korterink",
        email: "leroy@test.com"
      }}
      category="Case study"
      publishedDate="2019-12-03T23:54:13.887Z"
      title={"The Expertise of\nConcise Environment"}
      inverted
    />

    <ArticleHeading
      author={{
        fullName: "Leroy Korterink",
        email: "leroy@test.com"
      }}
      category="Case study"
      publishedDate="2019-12-03T23:54:13.887Z"
      title={"The Expertise of\nConcise Environment"}
    />

    <RichText
      nodes={[
        {
          type: "paragraph",
          children: [
            {
              text: "A line of text in a paragraph.",
              marks: []
            }
          ]
        }
      ]}
    />
  </Fragment>
);
