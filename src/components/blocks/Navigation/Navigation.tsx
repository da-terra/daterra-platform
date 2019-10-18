import React from "react";
import styled from "styled-components";
import IBlock from "../../../types/IBlock";
import RoutePath from "../../../data/RoutePath";
import { Wrapper } from "../../../util/layout";
import NavigationButton from "../../general/NavigationButton";

const NavigationWrapper = styled(Wrapper)`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 2rem;
  z-index: 1;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  margin-left: auto;
`;

const ListItem = styled.li`
  &:not(:first-child) {
    margin-left: 4rem;
  }
`;

const Navigation: React.FC<IBlock> = () => (
  <NavigationWrapper>
    <List>
      <ListItem>
        <NavigationButton to={RoutePath.ForBusiness}>
          Voor Bedrijven
        </NavigationButton>
      </ListItem>

      <ListItem>
        <NavigationButton to={RoutePath.ForStudents}>
          Voor Studenten
        </NavigationButton>
      </ListItem>

      <ListItem>
        <NavigationButton to={RoutePath.ForExperts}>
          Voor Experts
        </NavigationButton>
      </ListItem>
    </List>
  </NavigationWrapper>
);

export default Navigation;
