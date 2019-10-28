import React from "react";
import { Page } from "../../util/layout";
import Hero from "../../components/blocks/Hero";
import Navigation from "../../components/blocks/Navigation";

import { LandingCaseStudies, LandingFooter, LandingPartnerHighlight } from './styled';

// Mock data
import caseStudies from "../../data/mock/caseStudies";

const Landing: React.FC = () => {
  return (
    <Page>
      <Hero />

      <Navigation />

      <LandingCaseStudies caseStudies={caseStudies} />

      <LandingPartnerHighlight partners={[
        {
          uuid: "1",
          title: "Ijsselvliet",
          image: {
            src: require('../../components/blocks/PartnerHighlight/partners/ijsselvliet.png'),
            alt: "Ijsselvliet logo",
            fallbackColor: '#eee'
          },
          link: {
            href: "https://ijsselvliet.nl/",
            title: "",
            target: "_blank"
          }
        },
        {
          uuid: "2",
          title: "Wehkamp",
          image: {
            src: require('../../components/blocks/PartnerHighlight/partners/wehkamp.svg'),
            alt: "Wehkamp logo",
            fallbackColor: '#eee'
          },
          link: {
            href: "https://ijsselvliet.nl/",
            title: "",
            target: "_blank"
          }
        }
      ]} />

      <LandingFooter
        address={"787 Chapel Hill Ct, \nHelena \nMontana, 22920"}
        email="info@studata.nl"
        phone="(677) 296-8090"
      />
    </Page>
  );
};

export default Landing;
