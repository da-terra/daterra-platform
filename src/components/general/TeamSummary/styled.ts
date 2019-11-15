import styled from "styled-components";

export const TeamSummaryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TeamGroup = styled.div`
  display: flex;
`;

export const SummaryAvatar = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 100%;
  border: 2px solid white;

  &:not(:first-child) {
    margin-left: -10px;
  }
`;
