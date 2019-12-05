import React from "react";
import { WrapperWidth } from "../Wrapper";
import { FontColor, FontWeight } from "../../../data/style/variables";
import {
  Background,
  Wrapper,
  HeadingWrapper,
  Description,
  Content,
  Tag
} from "./styled";

type TagWrapperProps = {
  tag: React.ReactNode;
  heading?: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
};

const TagWrapper: React.FC<TagWrapperProps> = ({
  children,
  tag,
  heading,
  description
}) => (
  <Background>
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
