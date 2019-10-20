import React from "react";
import IOwner from "../../../types/IOwner";
import Paragraph, {
  ParagraphSize,
  ParagraphColor,
  ParagraphWeight
} from "../Paragraph";
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
        paragraphSize={ParagraphSize.Small}
        paragraphWeight={ParagraphWeight.Bold}
        href={link.href}
        target={link.target}
        title={title}
        serif
      >
        {title}
      </PartnerLink>

      <Paragraph
        paragraphSize={ParagraphSize.Small}
        paragraphColor={ParagraphColor.Muted}
      >
        {location}
      </Paragraph>
    </PartnerDetails>
  </Wrapper>
);

export default Partner;
