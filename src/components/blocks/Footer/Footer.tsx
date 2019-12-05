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

type SocialNetwork = {
  uuid: string;
  image: IImage;
  link: ILink;
};

type SitemapGroup = {
  uuid: string;
  tag: String;
  links: (ILink & { uuid: string })[];
};

type FooterProps = {
  socialNetworks: SocialNetwork[];
  sitemap: SitemapGroup[];
  disclaimer: string;
  inverted: boolean;
};

const Footer: React.FC<FooterProps> = ({
  socialNetworks,
  sitemap,
  disclaimer,
  inverted
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
    <Background inverted={inverted}>
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
                  fontColor={
                    inverted ? FontColor.Secondary : FontColor.TertiaryInverted
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
        </Top>

        <Bottom>
          <Logo showName />

          <Disclaimer
            fontColor={
              inverted ? FontColor.Secondary : FontColor.TertiaryInverted
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

export default Footer;
