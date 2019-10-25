import styled from "styled-components";
import { Wrapper } from "../../../util/layout";

export const PartnerWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-around;
`;

export const PartnerLink = styled.a`
  color: currentColor;
  text-decoration: none;
  display: flex;
  flex-direction: column;
`;

export const PartnerLogo = styled.img`
  width: 20rem;
`;
