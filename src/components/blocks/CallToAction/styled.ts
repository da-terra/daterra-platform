import styled from "styled-components";
import { SolidButton } from "../../general/Button";
import { default as Wrapper } from "../../general/Wrapper";

export const Background = styled.div`
  display: block;
  width: 100%;
  background: ${props => props.theme.background.accent};
  padding: 12.8rem 0 10rem;
  position: relative;
`;

export const BackgroundShape = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 150rem;
`;

export const Content = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CtaButton = styled(SolidButton)`
  margin: 5.2rem auto 0;
`;
