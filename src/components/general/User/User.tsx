import React from "react";
import { FontColor, FontSize, FontWeight } from "../../../data/style/variables";
import { Wrapper, UserAvatar, NameWrapper, FullName, Prefix } from "./styled";
import { IUser } from "@data-science-platform/shared";

type UserProps = IUser & {
  className?: string;
  prefix?: string;
};

const User: React.FC<UserProps> = ({
  className,
  photos,
  prefix,
  displayName
}) => {
  const [avatar] = photos ?? [];

  return (
    <Wrapper className={className}>
      {avatar && (
        <UserAvatar src={avatar.value} alt={displayName} fallbackColor="#eee" />
      )}

      <NameWrapper>
        {prefix && (
          <Prefix
            fontSize={FontSize.Small}
            fontColor={FontColor.Secondary}
            fontWeight={FontWeight.Bold}
            italic
          >
            {prefix}
          </Prefix>
        )}

        <FullName fontWeight={FontWeight.Bold} serif>
          {displayName}
        </FullName>
      </NameWrapper>
    </Wrapper>
  );
};

export default User;
