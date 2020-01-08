import React, { useState, useCallback } from "react";
import { IUser } from "@data-science-platform/shared";
import { FontWeight } from "../../../data/style/variables";
import {
  Container,
  ButtonWrapper,
  Button,
  DropDownIcon,
  UserAvatar,
  Menu,
  MenuLinkDivider,
  MenuLink
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

        <Menu show={showMenu}>
          <MenuLink href="/profile" serif>
            Mijn profiel
          </MenuLink>

          <MenuLink href="/settings" serif>
            Instellingen
          </MenuLink>

          <MenuLinkDivider />

          <MenuLink href="/signout" fontWeight={FontWeight.Bold} serif>
            Uitloggen
          </MenuLink>
        </Menu>
      </ButtonWrapper>
    </Container>
  );
};

export default UserButton;
