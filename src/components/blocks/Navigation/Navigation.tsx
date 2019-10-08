import React from "react";
import styled from "styled-components";
import NavigationButton from "../../general/NavigationButton";
import { Wrapper } from "../../../util/layout";

const NavigationWrapper = styled(Wrapper)`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 2rem;
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

const Navigation: React.FC = () => (
  <NavigationWrapper>
    <List>
      <ListItem>
        <NavigationButton to="/business">Voor Business</NavigationButton>
      </ListItem>

      <ListItem>
        <NavigationButton to="/students">Voor Students</NavigationButton>
      </ListItem>

      <ListItem>
        <NavigationButton to="/data-scientists">Voor Experts</NavigationButton>
      </ListItem>
    </List>
  </NavigationWrapper>
);

export default Navigation;
