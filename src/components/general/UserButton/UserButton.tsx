import { IUser } from "@data-science-platform/shared";
import React, { useCallback, useState } from "react";
import { FormattedMessage } from "react-intl";
import { FontWeight } from "../../../data/style/variables";
import RoutePath from "../../../data/RoutePath";
import {
  Button,
  ButtonWrapper,
  CardMenuDivider,
  CardMenuLink,
  Container,
  DropDownIcon,
  StyledCardMenu,
  UserAvatar
} from "./styled";

type UserButtonProps = {
  me: IUser;
};

const UserButton: React.FC<UserButtonProps> = ({ me }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = useCallback(() => setShowMenu(!showMenu), [
    setShowMenu,
    showMenu
  ]);

  const [firstPhoto] = me?.photos ?? [];

  return (
    <Container>
      <ButtonWrapper>
        <Button onClick={toggleMenu} fontWeight={FontWeight.Bold} serif>
          {me.name?.givenName ?? me.displayName}

          <DropDownIcon invert={showMenu} />

          <UserAvatar
            src={firstPhoto.value}
            alt={me.displayName}
            fallbackColor="#eee"
          />
        </Button>

        <StyledCardMenu show={showMenu}>
          <CardMenuLink href={RoutePath.Profile} serif>
            <FormattedMessage id="UserButton_myProfile" />
          </CardMenuLink>

          <CardMenuLink href={RoutePath.ProfilePreference} serif>
            <FormattedMessage id="UserButton_myPreferences" />
          </CardMenuLink>

          <CardMenuDivider />

          <CardMenuLink href="/signout" fontWeight={FontWeight.Bold} serif>
            <FormattedMessage id="UserButton_signOut" />
          </CardMenuLink>
        </StyledCardMenu>
      </ButtonWrapper>
    </Container>
  );
};

export default UserButton;
