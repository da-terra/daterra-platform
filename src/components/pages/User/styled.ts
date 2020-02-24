import styled from "styled-components";
import Paragraph from "../../general/Paragraph";
import RoleTag from "../../general/RoleTag";
import Wrapper from "../../general/Wrapper";

export const StyledWrapper = styled(Wrapper)`
  margin: auto;
`;

export const Group = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

export const Label = styled(Paragraph)`
  width: 25rem;
`;

export const Value = styled(Paragraph)`
  display: flex;
  max-width: 50%;

  &:before {
    content: ": ";
    margin-right: 1rem;
  }
`;

export const RoleTagWrapper = styled.div`
  margin-bottom: -1rem;
  margin-right: -1rem;
`;

export const StyledRoleTag = styled(RoleTag)`
  margin-bottom: 1rem;
  margin-right: 1rem;
`;
