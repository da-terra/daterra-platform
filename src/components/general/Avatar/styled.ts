import styled from "styled-components";

export const AvatarWrapper = styled.div<{
  fallbackColor: string;
  size?: number;
}>`
  background-color: ${props => props.fallbackColor};
  width: ${props => props.size}rem;
  height: ${props => props.size}rem;
  border-radius: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;
