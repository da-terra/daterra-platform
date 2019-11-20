import styled from "styled-components";
import Heading from "../../../../components/general/Heading";
import { SolidButton } from "../../../../components/general/Button";

export { Circle } from "../../../../util/layout";

export const Content = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  width: 100%;
  min-height: 100vh;
  padding: 10rem 0;
  pointer-events: none;
`;

export const FormWrapper = styled.form`
  width: 100%;
  max-width: 60rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  pointer-events: all;
`;

export const FormHeading = styled(Heading)`
  margin-bottom: 3.2rem;
`;

export const SubmitButton = styled(SolidButton)`
  margin: 6.2rem auto 0;
`;
