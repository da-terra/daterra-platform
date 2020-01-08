import React from "react";
import { IImage, ILink } from "@data-science-platform/shared";
import { PartnerCard, PartnerImage } from "./styled";

type PartnerProps = {
  className?: string;
  title: string;
  image: IImage;
  link: ILink;
};

const Partner: React.FC<PartnerProps> = ({ className, link, image }) => (
  <PartnerCard className={className} {...link}>
    <PartnerImage {...image} />
  </PartnerCard>
);

export default Partner;
