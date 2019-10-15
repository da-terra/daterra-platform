import React, { useContext } from "react";
import styled from "styled-components";
import { PieContext } from "./Pie";

type LegendProps = {
  list?: React.ElementType;
  listItem?: React.ElementType;
};

const List = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.6rem;

  &::before {
    content: "";
    display: block;
    width: 1.5rem;
    height: 2rem;
    margin-left: 1rem;
    margin-right: 1rem;
    border-radius: 0.5rem;
    background: ${props => props.color};
  }
`;

const Legend: React.FC<LegendProps> = ({
  children,
  list = List,
  listItem = ListItem
}) => {
  const ListComponent = list;
  const ListItemComponent = listItem;

  const pieContext = useContext(PieContext);

  const listItems = pieContext.slices.map(({ color, label }) => (
    <ListItemComponent color={color} key={label}>
      {label}
    </ListItemComponent>
  ));

  return <ListComponent>{listItems}</ListComponent>;
};

export default Legend;
