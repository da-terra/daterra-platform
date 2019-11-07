import styled from "styled-components";
import Paragraph from "../../general/Paragraph";
import Button from "../../general/Button";

export { default as Wrapper } from "../../general/Wrapper";
export { default as Heading } from "../../general/Heading";
export { default as Logo } from "../../general/Logo";
export { LinkButton } from "../../general/Button";

export const Background = styled.div`
  background: ${props => props.theme.background.accent};
  color: ${props => props.theme.copy.primaryInverted};
  padding: 6.4rem 0;
`;

/**
 * Footer top
 */
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 7.6rem;
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
  min-width: 70rem;
  display: flex;
  margin: 0 -6.4rem;
`;

export const SitemapGroup = styled.div`
  margin: 0 6.4rem;
`;

export const SitemapGroupTag = styled(Paragraph)`
  text-transform: uppercase;
`;

export const SitemapGroupLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3.8rem;
`;

/**
 * Footer bottom
 */
export const Bottom = styled.div`
  display: flex;
`;

export const Disclaimer = styled(Paragraph)`
  margin: auto 0 auto auto;
`;
