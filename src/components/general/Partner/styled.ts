import styled from "styled-components";
import Button from "../Button";

export const PartnerCard = styled(Button)`
  background: ${props => props.theme.background.primary};
  border-radius: 1rem;
  position: relative;

  &:before {
    content: "";
    display: block;
    padding-top: 100%;
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
