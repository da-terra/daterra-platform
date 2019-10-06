import styled from "styled-components";

export const Page = styled.div`
  color: ${props => props.theme.color.foreground};
  background: ${props => props.theme.color.background};
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  position: relative;
  max-width: 1200px;
  width: 100%;
  padding: 0 2rem;
  margin: 0 auto;
`;
