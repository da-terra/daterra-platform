import styled from "styled-components";
import Wrapper from "../../../components/general/Wrapper";

export { default as Header } from "../../../components/blocks/Header";
export { LinkButton } from "../../../components/general/Button";
export { default as Organization } from "../../../components/general/Organization";
export { default as SplashScreen } from "../../../components/general/SplashScreen";
export { Circle } from "../../../util/layout";

export const PageWrapper = styled(Wrapper)`
  margin-top: 10rem;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 2rem;
`;
