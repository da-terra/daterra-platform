import React from "react";
import { IPartner } from "../../../data/type/ICaseStudy";
import Paragraph, { ParagraphType } from "../Paragraph";
import { Wrapper, PartnerAvatar, PartnerLink, PartnerDetails } from "./styled";

const Partner: React.FC<IPartner> = ({ image, title, location, link }) => (
  <Wrapper>
    {image && <PartnerAvatar {...image} />}

    <PartnerDetails>
      <PartnerLink
        type={ParagraphType.Small}
        href={link.href}
        target={link.target}
        title={title}
      >
        {title}
      </PartnerLink>

      <Paragraph type={ParagraphType.Muted}>{location}</Paragraph>
    </PartnerDetails>
  </Wrapper>
);

export default Partner;
