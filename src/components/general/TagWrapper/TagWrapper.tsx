import React from "react";
import { WrapperWidth } from "../Wrapper";
import { FontColor, FontWeight } from "../../../data/style/variables";
import { Wrapper, HeadingWrapper, Content, Tag } from "./styled";

type TagWrapperProps = {
  tag: React.ReactNode;
  heading: React.ReactNode;
  children: React.ReactNode;
};

const TagWrapper: React.FC<TagWrapperProps> = ({ children, tag, heading }) => (
  <Wrapper width={WrapperWidth.Normal}>
    <HeadingWrapper width={WrapperWidth.Small}>{heading}</HeadingWrapper>

    <Content>
      <Tag fontColor={FontColor.Muted} fontWeight={FontWeight.Black}>
        {tag}
      </Tag>

      <Wrapper width={WrapperWidth.Small}>{children}</Wrapper>
    </Content>
  </Wrapper>
);

export default TagWrapper;
