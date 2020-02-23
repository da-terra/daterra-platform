import React from "react";
import { IImage } from "@data-science-platform/shared";
import { AvatarWrapper } from "./styled";

type AvatarProps = IImage & {
  className?: string;
  size?: number;
};

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = 4,
  fallbackColor = "#eee",
  className
}) => (
  <AvatarWrapper
    fallbackColor={fallbackColor}
    size={size}
    className={className}
  >
    {src && <img src={src} alt={alt} />}
  </AvatarWrapper>
);

export default Avatar;
