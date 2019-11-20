import React from "react";
import { AvatarWrapper } from "./styled";

type AvatarProps = IImage & {
  className?: string;
};

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  fallbackColor,
  className
}) => (
  <AvatarWrapper fallbackColor={fallbackColor} className={className}>
    <img src={src} alt={alt} />
  </AvatarWrapper>
);

export default Avatar;
