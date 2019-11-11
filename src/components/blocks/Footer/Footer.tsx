import React from "react";
import { HeadingType } from "../../general/Heading";
import { FontColor, FontWeight, FontSize } from "../../../data/style/variables";
import {
  Wrapper,
  Heading,
  Background,
  Top,
  SocialWrapper,
  SocialNetworks,
  SocialNetworkLink,
  SocialNetworkImage,
  Sitemap,
  SitemapGroup,
  SitemapGroupTag,
  SitemapGroupLinks,
  SitemapLink,
  Bottom,
  Logo,
  Disclaimer
} from "./styled";

type Link = {
  href: string;
  title: string;
  target?: "_blank" | "_self";
};

type SocialNetwork = {
  uuid: string;
  image: {
    src: string;
    alt: string;
    fallbackColor: string;
  };
  link: Link;
};

type SitemapGroup = {
  uuid: string;
  tag: "Blog";
  links: ({ uuid: string } & Link)[];
};

type FooterProps = {
  socialNetworks: SocialNetwork[];
  sitemap: SitemapGroup[];
  disclaimer: string;
};

const Footer: React.FC<FooterProps> = ({
  socialNetworks,
  sitemap,
  disclaimer
}) => {
  const renderedSocialNetworks = (
    <SocialNetworks>
      {socialNetworks.map(socialNetwork => (
        <SocialNetworkLink {...socialNetwork.link} key={socialNetwork.uuid}>
          <SocialNetworkImage {...socialNetwork.image} />
        </SocialNetworkLink>
      ))}
    </SocialNetworks>
  );

  return (
    <Background>
      <Wrapper>
        <Top>
          <SocialWrapper>
            <Heading
              headingType={HeadingType.Secondary}
              fontWeight={FontWeight.Black}
            >
              Vind ons op
            </Heading>

            {renderedSocialNetworks}
          </SocialWrapper>

          <Sitemap>
            {sitemap.map(({ uuid, tag, links }) => (
              <SitemapGroup key={uuid}>
                <SitemapGroupTag
                  fontColor={FontColor.TertiaryInverted}
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
                      {link.title}
                    </SitemapLink>
                  ))}
                </SitemapGroupLinks>
              </SitemapGroup>
            ))}
          </Sitemap>
        </Top>

        <Bottom>
          <Logo showName />

          <Disclaimer fontColor={FontColor.TertiaryInverted} serif>
            {disclaimer}
          </Disclaimer>
        </Bottom>
      </Wrapper>
    </Background>
  );
};

export default Footer;
