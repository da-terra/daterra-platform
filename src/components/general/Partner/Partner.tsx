import React from "react";
import { PartnerCard, PartnerImage } from "./styled";

type PartnerProps = {
  className?: string;
  title: string;
  image: {
    src: string;
    alt: string;
    fallbackColor: string;
  };
  link: {
    href: string;
    title: string;
    target?: "_blank" | "_self";
  };
};

const Partner: React.FC<PartnerProps> = ({ className, link, image }) => (
  <PartnerCard className={className} {...link}>
    <PartnerImage {...image} />
  </PartnerCard>
);

export default Partner;
