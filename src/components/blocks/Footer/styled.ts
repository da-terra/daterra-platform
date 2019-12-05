import styled from "styled-components";
import Paragraph from "../../general/Paragraph";
import Button, { LinkButton } from "../../general/Button";
import { Breakpoints } from "../../../data/style/variables";

export { default as Wrapper } from "../../general/Wrapper";
export { default as Heading } from "../../general/Heading";
export { default as Logo } from "../../general/Logo";

export const Background = styled.div<{ inverted: boolean }>`
  padding: 6.4rem 0;
  overflow: hidden;
  background: ${props =>
    props.inverted
      ? props.theme.background.primary
      : props.theme.background.accent};
  color: ${props =>
    props.inverted
      ? props.theme.copy.primary
      : props.theme.copy.primaryInverted};

  @media (max-width: ${Breakpoints.H500}) {
    padding-bottom: 2rem;
  }
`;

/**
 * Footer top
 */
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 7.6rem;

  @media (max-width: ${Breakpoints.H1500}) {
    display: block;
  }
`;

export const SocialWrapper = styled.div`
  margin-right: 6.4rem;
`;

export const SocialNetworks = styled.div`
  margin: 3.2rem -1.4rem;
  display: flex;
`;

export const SocialNetworkLink = styled(Button)`
  display: block;
  max-width: 3.2rem;
  height: 3.2rem;
  margin: 0 1.4rem;
`;

export const SocialNetworkImage = styled.img`
  height: 100%;
`;

export const Sitemap = styled.div`
  display: flex;
  margin: -3.2rem -6.4rem;
  flex-wrap: wrap;

  @media (max-width: ${Breakpoints.H1500}) {
    margin-top: 3.2rem;
  }
`;

export const SitemapGroup = styled.div`
  margin: 3.2rem 6.4rem;
`;

export const SitemapGroupTag = styled(Paragraph)`
  text-transform: uppercase;
`;

export const SitemapGroupLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3.8rem;

  @media (max-width: ${Breakpoints.H1500}) {
    margin-top: 2.4rem;
  }
`;

export const SitemapLink = styled(LinkButton)`
  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  &:hover {
    text-decoration: underline;
  }
`;

/**
 * Footer bottom
 */
export const Bottom = styled.div`
  display: flex;

  @media (max-width: ${Breakpoints.H750}) {
    display: block;
  }
`;

export const Disclaimer = styled(Paragraph)`
  margin: auto 0 0 auto;

  @media (max-width: ${Breakpoints.H750}) {
    margin-top: 2.4rem;
  }
`;
