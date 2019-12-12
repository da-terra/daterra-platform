import styled, { css } from "styled-components";
import Paragraph from "../../../general/Paragraph";
import { LinkButton, SolidButton } from "../../../general/Button";
import Wrapper from "../../../general/Wrapper";

export const Background = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 3rem 0;

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
  }
`;

export const Popup = styled(Wrapper)`
  padding-top: 3rem;
  padding-bottom: 3rem;
  color: ${props => props.theme.copy.primary};
  background: ${props => props.theme.background.primary};
  border-radius: ${props => props.theme.card.borderRadius}px;
`;

export const Disclaimer = styled(Paragraph)`
  margin-right: auto;
  margin-bottom: 2rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

const actionCss = css`
  &:not(:last-child) {
    margin-right: 5rem;
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
