import styled from "styled-components";
import Avatar from "../Avatar";
import Paragraph from "../Paragraph";

export const Wrapper = styled.div`
  display: flex;

  & + & {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid ${props => props.theme.copy.tertiary};
  }
`;

export const Message = styled.div`
  width: 100%;
`;

export const MessageDetails = styled.div`
  margin-bottom: 1rem;
  white-space: nowrap;
`;

export const CreatedDate = styled(Paragraph)`
  &::before {
    content: "-";
    display: inline-block;
    margin: 0 2rem;
  }
`;

export const StyledAvatar = styled(Avatar)`
  margin-right: 2rem;
  margin-top: 0.5rem;
  flex: 1 0 auto;
`;
