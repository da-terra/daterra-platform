import React from "react";
import IOwner from "../../../types/IOwner";
import Paragraph, { ParagraphType } from "../Paragraph";
import { Wrapper, PartnerAvatar, PartnerLink, PartnerDetails } from "./styled";

type PartnerProps = IOwner & {
  className?: string;
};

const Partner: React.FC<PartnerProps> = ({
  className,
  image,
  title,
  location,
  link
}) => (
  <Wrapper className={className}>
    {image && <PartnerAvatar {...image} />}

    <PartnerDetails>
      <PartnerLink
        paragraphType={ParagraphType.Small}
        href={link.href}
        target={link.target}
        title={title}
      >
        {title}
      </PartnerLink>

      <Paragraph paragraphType={ParagraphType.Muted}>{location}</Paragraph>
    </PartnerDetails>
  </Wrapper>
);

export default Partner;
