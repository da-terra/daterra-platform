import React, { useCallback } from "react";
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

  const handleOptionClick = useCallback(() => {
    if (!submitButtonRef.current) {
      return;
    }

    submitButtonRef.current.click();
  }, [submitButtonRef]);

  return (
    <Wrapper>
      <Question headingType={HeadingType.Secondary}>{question}</Question>

      <MultipleChoice
        name={_id}
        options={options!}
        onClick={handleOptionClick}
      />

      <button type="submit" ref={submitButtonRef} hidden>
        Naar volgende vraag
      </button>
    </Wrapper>
  );
};
export default MultipleChoiceQuestion;
