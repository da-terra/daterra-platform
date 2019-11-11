import styled from "styled-components";
import Button from "../Button";
import Easings from "../../../data/style/easings";

export const PartnerCard = styled(Button)`
  background: ${props => props.theme.background.primary};
  border-radius: 1rem;
  position: relative;

  &:hover:before {
    background: rgba(0, 0, 0, 0.05);
  }

  &:before {
    content: "";
    display: block;
    padding-top: 100%;
    transition: all 0.6s ${Easings.easeOutCubic};
  }
`;

export const PartnerImage = styled.img`
  width: calc(100% - 6rem);
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
