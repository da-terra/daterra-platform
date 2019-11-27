import styled from "styled-components";
import QuickScanQuestionButton from "../QuickScanQuestionButton";

export { default as MultipleChoiceQuestion } from "../MultipleChoiceQuestion";
export { default as RangeQuestion } from "../RangeQuestion";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`

export const SubmitButton = styled(QuickScanQuestionButton)`
  margin: 4rem auto 0;
`;
