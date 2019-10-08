import styled from "styled-components";

export const AvatarWrapper = styled.div<{ fallbackColor: string }>`
  background-color: ${props => props.fallbackColor};
  width: 3.3rem;
  height: 3.3rem;
  border-radius: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;
