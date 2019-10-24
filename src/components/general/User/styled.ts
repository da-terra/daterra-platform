import styled from "styled-components";
import { LinkButton } from "../Button";
import Avatar from "../Avatar";
import Paragraph from "../Paragraph";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UserAvatar = styled(Avatar)`
  margin-right: 1.5rem;
  flex: 1 0 auto;
`;

export const NameWrapper = styled.div`
  flex: 1 0 auto;
  width: 100%;
`

export const FullName = styled(LinkButton)`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Prefix = styled(Paragraph)`
  white-space: nowrap;
  margin-right: 8px;
`;
