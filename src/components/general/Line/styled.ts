import styled from "styled-components";

export const HorizontalLine = styled.hr`
  border: none;
  border-bottom: solid 2px ${props => props.theme.copy.primary};
  opacity: 0.1;
`;

export const VerticalLine = styled.hr`
  border: none;
  border-bottom: solid 2px ${props => props.theme.copy.primary};
  opacity: 0.1;
`;
