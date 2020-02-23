import styled from "styled-components";
import Heading from "../../../../../components/general/Heading";

export const Wrapper = styled.div`
  padding: 2rem;
  border-radius: 1rem;
  background: ${props => props.theme.card.background};
  box-shadow: ${props => props.theme.card.shadow};
`;

export const StyledHeading = styled(Heading)`
  position: absolute;
  top: -2rem;
  left: 0;
  transform: translateY(-100%);
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 2rem;
`;
