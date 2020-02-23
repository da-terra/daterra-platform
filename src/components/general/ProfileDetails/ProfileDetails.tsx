import { getFlaggedBits, IUser, Role } from "@data-science-platform/shared";
import React from "react";
import { FontColor, FontSize, FontWeight } from "../../../data/style/variables";
import { LinkButton } from "../Button";
import {
  DisplayName,
  NameWrapper,
  Roles,
  StyledAvatar,
  UserInfoWrapper,
  Wrapper
} from "./styled";

type ProfileDetailsProps = IUser & {
  className?: string;
};

const roleNamesMap = {
  [Role.Company]: "Company",
  [Role.Student]: "Student",
  [Role.Expert]: "Expert",
  [Role.ContentEditor]: "ContentEditor"
};

const ProfileDetails: React.FC<ProfileDetailsProps> = ({
  className,
  displayName,
  emails,
  photos,
  role
}) => {
  const [firstPhoto] = photos;

  const roleNames = getFlaggedBits(Role as any, role)
    .map(
      // @ts-ignore
      role => roleNamesMap[role]
    )
    .filter(i => i != null);

  return (
    <Wrapper className={className}>
      <UserInfoWrapper>
        <StyledAvatar
          src={firstPhoto.value}
          alt={displayName}
          size={10}
          fallbackColor="#eee"
        />

        <NameWrapper>
          <DisplayName fontWeight={FontWeight.Bold} serif>
            {displayName}
          </DisplayName>

          <Roles
            fontColor={FontColor.Secondary}
            fontSize={FontSize.Small}
            fontWeight={FontWeight.Bold}
            italic
          >
            {roleNames.join(", ")}
          </Roles>
        </NameWrapper>
      </UserInfoWrapper>

      {emails.map(email => (
        <LinkButton
          key={email.value}
          href={`mailto:${email.value}`}
          fontSize={FontSize.Small}
          serif
        >
          {email.value}
        </LinkButton>
      ))}
    </Wrapper>
  );
};

export default ProfileDetails;
