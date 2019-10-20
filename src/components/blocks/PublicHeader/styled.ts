import styled from "styled-components";
import { Wrapper } from "../../../util/layout";
import { LinkButton } from "../../general/Button";

export const HeaderWrapper = styled(Wrapper)`
  display: flex;
  margin-top: 5rem;
  margin-bottom: 4rem;
`;

export const CtaContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const SigninLinkButton = LinkButton;

export const ToggleThemeLinkButton = styled(LinkButton)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-left: 2rem;
'`;
