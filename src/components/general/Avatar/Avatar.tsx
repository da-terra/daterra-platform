import React from "react";
import { IImage } from "../../../data/type/ICaseStudy";
import { AvatarWrapper } from "./styled";

type AvatarProps = IImage & {
  className?: string;
};

const Avatar: React.FC<AvatarProps> = ({
  url,
  alt,
  fallbackColor,
  className
}) => (
  <AvatarWrapper fallbackColor={fallbackColor} className={className}>
    <img src={url} alt={alt} />
  </AvatarWrapper>
);

export default Avatar;
