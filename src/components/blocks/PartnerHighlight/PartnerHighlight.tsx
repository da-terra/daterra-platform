import React from "react";
import IImage from "../../../types/IImage";
import { PartnerWrapper, PartnerLink, PartnerLogo } from "./styled";

type PartnerHighlightProps = {
  className?: string;
  partners: {
    uuid: string;
    image: IImage;
    title: string;
    link: {
      href: string;
      target: "_self" | "_blank";
      title: string;
    };
  }[];
};

const PartnerHighlight: React.FC<PartnerHighlightProps> = ({
  className,
  partners
}) => (
  <PartnerWrapper className={className}>
    {partners.map(partner => (
      <PartnerLink
        key={partner.uuid}
        href={partner.link.href}
        target={partner.link.target}
        title={partner.link.title}
      >
        <PartnerLogo src={partner.image.src} alt={partner.image.alt} />
      </PartnerLink>
    ))}
  </PartnerWrapper>
);

export default PartnerHighlight;
