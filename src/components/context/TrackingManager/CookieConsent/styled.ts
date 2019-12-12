import styled, { css } from "styled-components";
import Paragraph from "../../../general/Paragraph";
import { LinkButton, SolidButton } from "../../../general/Button";
import Wrapper from "../../../general/Wrapper";
import { Breakpoints } from "../../../../data/style/variables";

export const Background = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 3rem 2rem;

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: block;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
  }
`;

export const Popup = styled(Wrapper)`
  padding: 3rem;
  color: ${props => props.theme.copy.primary};
  background: ${props => props.theme.background.primary};
  border-radius: ${props => props.theme.card.borderRadius}px;
`;

export const Disclaimer = styled(Paragraph)`
  margin-right: auto;
  margin-bottom: 2rem;
`;

export const ButtonWrapper = styled.div`
  @media (max-width: ${Breakpoints.H750}) {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: ${Breakpoints.H500}) {
    display: block;
  }
`;

const actionCss = css`
  padding: 2rem 2.5rem;
  margin-right: 4rem;

  @media (max-width: ${Breakpoints.H750}) {
    margin: 0;
  }

  @media (max-width: ${Breakpoints.H500}) {
    width: 100%;
  }
`;

export const SolidAction = styled(SolidButton)`
  ${actionCss}
`;

export const LinkAction = styled(LinkButton)`
  ${actionCss}

  &:hover {
    text-decoration: underline;
  }
`;
