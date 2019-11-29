import React from "react";
import { Wrapper, ProfileHeading, ProfileDescription } from "./styled";

type ProfileCardProps = {
  heading: React.ReactNode;
  children: React.ReactNode;
};

const ProfileCard: React.FC<ProfileCardProps> = ({ heading, children }) => (
  <Wrapper>
    <ProfileHeading>{heading}</ProfileHeading>
    <ProfileDescription>{children}</ProfileDescription>
  </Wrapper>
);

export default ProfileCard;
