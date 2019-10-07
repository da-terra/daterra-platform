import React from "react";
import styled from "styled-components";

const Card = styled.div`
  height: 25rem;
  border-radius: ${props => props.theme.card.borderRadius}px;
  background: ${props => props.theme.color.invertForeground};
  box-shadow: rgba(3, 54, 62, 0.1) 3px 3px 10px 0;
`;

type Collaborator = {
  fullName: string;
  image: {
    url: string;
    alt: string;
  };
  tags: string[];
};

type CaseStudyCardProps = {
  uuid: string;
  title: string;
  publishedDate: string;
  author: {
    image: {
      url: string;
      alt: string;
    };
    link: {
      url: string;
      target: string;
    };
    fullName: string;
    company: string;
    location: string;
  };
  collaborators: Collaborator[];
};

const CaseStudyCard: React.FC<CaseStudyCardProps> = props => {
  return <Card />;
};

export default CaseStudyCard;
