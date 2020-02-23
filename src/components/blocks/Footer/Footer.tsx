import { ILink } from "@data-science-platform/shared";
import { getYear } from "date-fns";
import React from "react";
import { FontColor, FontSize, FontWeight } from "../../../data/style/variables";
import Heading, { HeadingType } from "../../general/Heading";
import Icon from "../../general/Icon";
import Logo from "../../general/Logo";
import Wrapper from "../../general/Wrapper";
import {
  Background,
  Bottom,
  Disclaimer,
  Sitemap,
  SitemapGroup,
  SitemapGroupLinks,
  SitemapGroupTag,
  SitemapLink,
  SocialNetworkLink,
  SocialNetworks,
  SocialWrapper,
  Top
} from "./styled";

type SocialNetwork = {
  uuid: string;
  icon: React.ReactNode;
  link: ILink;
};

type SitemapGroup = {
  uuid: string;
  tag: String;
  links: (ILink & { uuid: string })[];
};

type FooterProps = {
  socialNetworks?: SocialNetwork[];
  sitemap?: SitemapGroup[];
  disclaimer?: string;
  inverted?: boolean;
};

const Footer: React.FC<FooterProps> = ({
  socialNetworks,
  sitemap,
  disclaimer,
  inverted
}) => {
  const renderedSocialNetworks = (
    <SocialNetworks>
      {socialNetworks?.map(socialNetwork => (
        <SocialNetworkLink {...socialNetwork.link} key={socialNetwork.uuid}>
          {socialNetwork.icon}
        </SocialNetworkLink>
      ))}
    </SocialNetworks>
  );

  return (
    <Background inverted={inverted || false}>
      <Wrapper>
        {(socialNetworks?.length || sitemap?.length) && (
          <Top>
            {socialNetworks?.length && (
              <SocialWrapper>
                <Heading
                  headingType={HeadingType.Secondary}
                  fontWeight={FontWeight.Black}
                >
                  Vind ons op
                </Heading>

                {renderedSocialNetworks}
              </SocialWrapper>
            )}

            {sitemap?.length && (
              <Sitemap>
                {sitemap?.map(({ uuid, tag, links }) => (
                  <SitemapGroup key={uuid}>
                    <SitemapGroupTag
                      fontColor={
                        inverted
                          ? FontColor.Primary
                          : FontColor.TertiaryInverted
                      }
                      fontSize={FontSize.Large}
                      fontWeight={FontWeight.Black}
                    >
                      {tag}
                    </SitemapGroupTag>

                    <SitemapGroupLinks>
                      {links.map(link => (
                        <SitemapLink
                          {...link}
                          key={link.uuid}
                          fontSize={FontSize.Large}
                          fontWeight={FontWeight.Bold}
                          serif
                        >
                          {link.children}
                        </SitemapLink>
                      ))}
                    </SitemapGroupLinks>
                  </SitemapGroup>
                ))}
              </Sitemap>
            )}
          </Top>
        )}

        <Bottom>
          <Logo showName />

          <Disclaimer
            fontColor={
              inverted ? FontColor.Primary : FontColor.TertiaryInverted
            }
            serif
          >
            {disclaimer}
          </Disclaimer>
        </Bottom>
      </Wrapper>
    </Background>
  );
};

// @ts-ignore
Footer.defaultProps = {
  disclaimer: `Data Science Platform - Copyright ${getYear(new Date())}`,
  sitemap: [
    {
      uuid: "Blog",
      tag: "Blog",
      links: [
        {
          uuid: "/blog",
          href: "/blog",
          children: "Alle blogs"
        }
      ]
    },
    {
      uuid: "Algemeen",
      tag: "Algemeen",
      links: [
        {
          uuid: "/algemene-voorwaarden",
          href: "/algemene-voorwaarden",
          children: "Algemene voorwaarden"
        },

        {
          uuid: "/privacy-policy",
          href: "/privacy-policy",
          children: "Privacy policy"
        }
      ]
    }
  ],
  socialNetworks: [
    {
      uuid: "linked-in",
      link: {
        href: "https://www.linkedin.com/company/studata/",
        title: "Linked In",
        target: "_blank"
      },
      icon: <Icon.LinkedIn />
    },
    {
      uuid: "mail",
      link: {
        href: "mailto:contact@datascienceplatform.nl",
        title: "contact@datascienceplatform.nl",
        target: "_blank"
      },
      icon: <Icon.Email />
    }
  ]
};

export default Footer;
