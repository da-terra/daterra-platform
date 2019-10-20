import styled from "styled-components";
import { Wrapper } from "../../../util/layout";
import Logo from "../../general/Logo";
import { ParagraphProps } from "../../general/Paragraph/types";
import { LinkButton } from "../../general/Button";

export const HeaderLogo = Logo;

export const HeaderWrapper = styled(Wrapper)`
  display: flex;
  margin-top: 5rem;
  margin-bottom: 4rem;
`;

export const NavigationWrapper = styled.ul`
  display: flex;
  margin-right: auto;
  margin-left: 3rem;
`;

export const NavigationButton = styled(LinkButton)<ParagraphProps>`
  text-decoration: none;

  &:not(:last-child) {
    margin-right: 3rem;
  }

  &:hover {
    text-decoration: underline;
  }
`;
