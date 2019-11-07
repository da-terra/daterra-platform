import styled from "styled-components";
import Paragraph from "../Paragraph";
import Heading from "../Heading";
import Easings from "../../../data/style/easings";
export { default as Paragraph } from "../Paragraph";

type CardContentProps = {
  color: string;
};

const paddingSize = `1.5rem`;

export const CardImage = styled.img`
  min-width: 100%;
  height: 25rem;
`;

export const CardContent = styled.div<CardContentProps>`
  position: relative;
  padding: ${paddingSize};
  background: ${props => `#${props.color}`};
  color: ${props => props.theme.copy.primaryInverted};
  box-shadow: 0 0 3.5rem 4rem ${props => `#${props.color}`};
`;

export const Details = styled.div`
  position: absolute;
  top: 0;
  left: ${paddingSize};
  right: ${paddingSize};
  transform: translateY(-100%);
  display: flex;
  justify-content: space-between;
`;

export const PublishedDate = styled(Paragraph)`
  margin-right: auto;
  letter-spacing: 0.08rem;
`;

export const Tag = Paragraph;

export const Title = styled(Heading)`
  margin-bottom: 2rem;
  max-width: 80%;
`;

export const Author = styled.div`
  margin-bottom: 0.5rem;
`;

export const Card = styled.div`
  overflow: hidden;
  border-radius: 1rem;
  cursor: pointer;

  ${Author},
  ${Details} {
    transition: all 0.6s ${Easings.easeOutCubic};
  }

  &:not(:hover) {
    ${Author},
    ${Details} {
      transition-duration: 1.8s;
      transition-timing-function: ${Easings.easeOutExpo};
      opacity: 0.4;
    }
  }
`;
