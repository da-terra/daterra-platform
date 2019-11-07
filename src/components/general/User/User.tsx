import React from "react";
import IUser from "../../../types/IUser";
import { FontColor, FontSize, FontWeight } from "../../../data/style/variables";
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
        <Prefix fontSize={FontSize.Small} fontColor={FontColor.Muted} italic>
          {prefix}
        </Prefix>
      )}

      <FullName fontWeight={FontWeight.Bold} serif>
        {fullName}
      </FullName>
    </NameWrapper>
  </Wrapper>
);

export default User;
