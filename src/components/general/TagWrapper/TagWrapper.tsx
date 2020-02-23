import React from "react";
import { FontColor, FontWeight } from "../../../data/style/variables";
import Wrapper, { WrapperWidth } from "../Wrapper";
import {
  Background,
  Content,
  Description,
  HeadingWrapper,
  Tag
} from "./styled";

type TagWrapperProps = {
  tag: React.ReactNode;
  heading?: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

const TagWrapper: React.FC<TagWrapperProps> = ({
  children,
  tag,
  heading,
  description,
  className
}) => (
  <Background className={className}>
    <Wrapper width={WrapperWidth.Small}>
      {heading && <HeadingWrapper>{heading}</HeadingWrapper>}
      {description && <Description>{description}</Description>}

      <Content>
        <Tag fontColor={FontColor.Tertiary} fontWeight={FontWeight.Black}>
          {tag}
        </Tag>

        {children}
      </Content>
    </Wrapper>
  </Background>
);

export default TagWrapper;
