import React, { useRef } from "react";
import styled from "styled-components";
import Button from "../../general/Button";
import Icon from "../../general/Icon";
import Heading from "../../general/Heading";
import Paragraph from "../../general/Paragraph";
import Carousel from "../../general/Carousel";
import { Wrapper } from "../../../util/layout";

const Container = styled.div`
  position: relative;
`;

const Background = styled.div`
  background: ${props => props.theme.color.darkAccent};
  width: calc(50vw - 10rem);
  height: calc(100% + 15rem);
  right: calc(50% + 10rem);
  position: absolute;
  top: -7.5rem;
  border-top-right-radius: ${props => props.theme.card.borderRadius}px;
  border-bottom-right-radius: ${props => props.theme.card.borderRadius}px;
  box-shadow: rgba(0, 0, 0, 0.3) 3px -3px 25px 2px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0 4rem 2.5rem;
`;

const CaseStudiesHeading = styled(Heading)`
  color: ${props => props.theme.color.invertForeground};
  margin: 0;
  padding: 7rem 0;
`;

const ContentRow = styled.div`
  display: flex;
`;

const CaseStudiesParagraph = styled(Paragraph)`
  width: 25rem;
  margin: auto 10rem 0 0;
  color: ${props => props.theme.color.invertForeground};
`;

const CarouselButton = styled(Button)`
  display: flex !important;
  align-items: center;
  color: ${props => props.theme.color.invertForeground} !important;

  &:not(:first-child) {
    margin-left: 1rem;
  }
`;

// @ts-ignore
const CaseStudyCarousel = styled(Carousel)`
  flex: 1 0 auto;
`;

const CaseStudyCard = styled.div`
  height: 25rem;
  width: 200px;
  border-radius: ${props => props.theme.card.borderRadius}px;
  background: ${props => props.theme.color.invertForeground};
  box-shadow: rgba(3, 54, 62, 0.1) 3px 3px 10px 0;
  margin: 0 auto;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const CaseStudies: React.FC = () => {
  const forwardButton = useRef(null);
  const backButton = useRef(null);

  const caseStudies = [
    {
      id: "f7aa558a-6bb5-447e-91c5-cfd0429b05d6",
      title: "The Method of Full Featured Innovation",
      publishedDate: "2019-10-06T18:43:26.007Z",
      author: {
        image: {
          url: "https://source.unsplash.com/100x100/?avatar",
          alt: "Image of Peter Parker"
        },
        link: {
          url: "https://google.com/",
          target: "_blank"
        },
        fullName: "Peter Parker",
        company: "Advanced Investements",
        location: "San Fransisco"
      },
      collaborators: [
        {
          fullName: "Matthias Verweij",
          image: {
            url: "https://source.unsplash.com/100x100/?avatar",
            alt: "Image of Matthias Verweij"
          },
          tags: ["Student", "Data Analyst"]
        }
      ]
    },
    {
      id: "f7aa558a-6bb5-447e-91c5-cfd0429b05d7",
      title: "The Method of Full Featured Innovation",
      publishedDate: "2019-10-06T18:43:26.007Z",
      author: {
        image: {
          url: "https://source.unsplash.com/100x100/?avatar",
          alt: "Image of Peter Parker"
        },
        link: {
          url: "https://google.com/",
          target: "_blank"
        },
        fullName: "Peter Parker",
        company: "Advanced Investements",
        location: "San Fransisco"
      },
      collaborators: [
        {
          fullName: "Matthias Verweij",
          image: {
            url: "https://source.unsplash.com/100x100/?avatar",
            alt: "Image of Matthias Verweij"
          },
          tags: ["Student", "Data Analyst"]
        }
      ]
    },
    {
      id: "f7aa558a-6bb5-447e-91c5-cfd0429b05d8",
      title: "The Method of Full Featured Innovation",
      publishedDate: "2019-10-06T18:43:26.007Z",
      author: {
        image: {
          url: "https://source.unsplash.com/100x100/?avatar",
          alt: "Image of Peter Parker"
        },
        link: {
          url: "https://google.com/",
          target: "_blank"
        },
        fullName: "Peter Parker",
        company: "Advanced Investements",
        location: "San Fransisco"
      },
      collaborators: [
        {
          fullName: "Matthias Verweij",
          image: {
            url: "https://source.unsplash.com/100x100/?avatar",
            alt: "Image of Matthias Verweij"
          },
          tags: ["Student", "Data Analyst"]
        }
      ]
    }
  ];

  return (
    <Container>
      <Background>
        <CarouselButton ref={backButton}>
          <Icon.ArrowBack />
        </CarouselButton>
        <CarouselButton ref={forwardButton}>
          <Icon.ArrowForward />
        </CarouselButton>
      </Background>

      <Wrapper>
        <CaseStudiesHeading italic>Case Studies</CaseStudiesHeading>

        <ContentRow>
          <CaseStudiesParagraph>
            However, we can also agree that an basic component of one of the
            grand strategy has proved to be reliable in the scope of The Data of
            New Impact
          </CaseStudiesParagraph>

          <CaseStudyCarousel
            forwardButton={forwardButton}
            backButton={backButton}
          >
            {caseStudies.map(card => (
              <CaseStudyCard {...card} key={card.id} />
            ))}
          </CaseStudyCarousel>
        </ContentRow>
      </Wrapper>
    </Container>
  );
};

export default CaseStudies;
