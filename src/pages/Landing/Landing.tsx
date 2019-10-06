import React from "react";
import { Page } from "../../util/layout";
import Hero from "../../components/blocks/Hero";
import CaseStudies from "../../components/blocks/CaseStudies";

const Footer: React.FC = () => <div></div>;

const Landing: React.FC = () => {
  return (
    <Page>
      <Hero />

      {/* <Navigation /> */}
      <CaseStudies />

      <Footer />
    </Page>
  );
};

export default Landing;
