import React from "react";
import styled from "styled-components";
import Button from "../../general/Button";
import { Wrapper } from "../../../util/layout";
import { FontWeight, FontFamily } from "../../../data/style/variables";

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

const NavigationButton = styled(Button)`
  font-weight: ${FontWeight.BOLD};
  font-family: ${FontFamily.ROBOTO_SLAB};
  color: ${props => props.theme.color.darkAccent} !important;
  padding: 0.6rem 0 !important;
  display: inline-block !important;
  white-space: nowrap;

  &:hover {
    color: ${props => props.theme.color.foreground} !important;
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
