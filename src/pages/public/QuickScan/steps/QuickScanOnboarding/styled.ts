import styled from "styled-components";
import Heading from "../../../../../components/general/Heading";
import { SolidButton } from "../../../../../components/general/Button";
import Logo from "../../../../../components/general/Logo";
import Paragraph from "../../../../../components/general/Paragraph";

export { Circle } from "../../../../../util/layout";
export { default as Header } from "../../../../../components/blocks/Header";
export { default as Wrapper } from "../../../../../components/general/Wrapper";
export { default as Input } from "../../../../../components/general/Input";
export {
  default as InputGroup
} from "../../../../../components/general/InputGroup";

export const Content = styled.div<{ headerHeight: number }>`
  display: flex;
  min-height: calc(100vh - ${props => props.headerHeight}px);
  pointer-events: none;
`;

export const Form = styled.form`
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  pointer-events: all;
  width: 100%;
`;

export const FormLogo = styled(Logo)`
  margin-right: auto;
  margin-bottom: 4rem;
`;

export const FormHeading = styled(Heading)`
  margin-bottom: 1.2rem;
`;

export const FormParagraph = styled(Paragraph)`
  margin-bottom: 3.4rem;
`;

export const SubmitButton = styled(SolidButton)`
  margin: 6.2rem auto 0;
`;
