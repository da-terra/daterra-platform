import styled from "styled-components";
import Avatar from "../Avatar";
import Paragraph from "../Paragraph";

export const Wrapper = styled.div`
  min-width: 25rem;
  padding: 3rem 2rem;
  border-radius: 1rem;
  background: ${props => props.theme.card.background};
  box-shadow: ${props => props.theme.card.shadow};
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
`;

export const StyledAvatar = styled(Avatar)`
  margin-right: 2rem;
  flex: 1 0 auto;
`;

export const NameWrapper = styled.div``;

export const DisplayName = styled(Paragraph)`
  margin-bottom: 1rem;
`;

export const Roles = styled(Paragraph)`
  margin-top: 1.5rem;
`;
