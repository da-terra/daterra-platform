import React from "react";
import IUser from "../../../types/IUser";
import { ParagraphWeight, ParagraphSize, ParagraphColor } from "../Paragraph";
import { Wrapper, UserAvatar, NameWrapper, FullName, Prefix } from "./styled";

type UserProps = IUser & {
  className?: string;
  prefix?: string;
};

const User: React.FC<UserProps> = ({ className, image, prefix, fullName }) => (
  <Wrapper className={className}>
    {image && <UserAvatar {...image} />}

    <NameWrapper>
      {prefix && (
        <Prefix
          paragraphSize={ParagraphSize.Small}
          paragraphColor={ParagraphColor.Muted}
          italic
        >
          {prefix}
        </Prefix>
      )}

      <FullName
        paragraphWeight={ParagraphWeight.Bold}
        serif
      >
        {fullName}
      </FullName>
    </NameWrapper>
  </Wrapper>
);

export default User;
