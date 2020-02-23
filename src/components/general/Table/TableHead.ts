import styled from "styled-components";
import TableRow from "./TableRow";

export default styled.thead`
  ${TableRow} {
    background: ${props => props.theme.background.accent}
    color: ${props => props.theme.copy.primaryInverted}
  }
`;
