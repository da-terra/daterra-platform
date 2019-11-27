import styled from "styled-components";
import Heading from "../../../../components/general/Heading";
import { SolidButton } from "../../../../components/general/Button";

export const Wrapper = styled.div``;
export const Question = styled(Heading)``;

export const OptionList = styled.ul`
  padding: 0;
  list-style: none;
`;

export const OptionItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const Option = styled(SolidButton)`
  text-align: left;
`;
