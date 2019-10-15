import React from "react";
import styled from "styled-components";
import { Page } from "../../util/layout";
import Hero from "../../components/blocks/Hero";
import Navigation from "../../components/blocks/Navigation";
import CaseStudies from "../../components/blocks/CaseStudies";
import Footer from "../../components/blocks/Footer";

// Mock data
import caseStudies from "../../data/mock/caseStudies.json";
import ICaseStudy from "../../data/type/ICaseStudy";

const LandingCaseStudies = styled(CaseStudies)`
  margin-top: -8rem;
`;

const LandingFooter = styled(Footer)`
  margin-top: 25rem;
`;

const Landing: React.FC = () => {
  return (
    <Page>
      <Hero />
      <Navigation />
      <LandingCaseStudies caseStudies={caseStudies as ICaseStudy[]} />

      <LandingFooter
        address={"787 Chapel Hill Ct, \nHelena \nMontana, 22920"}
        email="info@studata.nl"
        phone="(677) 296-8090"
      />
    </Page>
  );
};

export default Landing;
