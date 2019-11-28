import React from "react";
import { HeadingType } from "../../../../components/general/Heading";
import { Wrapper, Question, MultipleChoice } from "./styled";

type MultipleChoiceQuestionProps = {
  nextQuestion?: IQuickScanQuestion;
} & IQuickScanQuestion;

const MultipleChoiceQuestion: React.FC<MultipleChoiceQuestionProps> = ({
  _id,
  question,
  options
}) => {
  const submitButtonRef = React.createRef<HTMLButtonElement>();

  return (
    <Wrapper>
      <Question headingType={HeadingType.Secondary}>{question}</Question>

      <MultipleChoice name={_id} options={options!} />

      <button type="submit" ref={submitButtonRef}>
        Naar volgende vraag
      </button>
    </Wrapper>
  );
};
export default MultipleChoiceQuestion;
