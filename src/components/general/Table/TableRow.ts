import styled from "styled-components";

export default styled.tr`
  &:nth-child(odd) {
    background: ${props => props.theme.background.secondary};
  }
`;
