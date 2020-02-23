import { IQuickscanQuestion } from "@data-science-platform/shared";
import React, { useCallback } from "react";
import { HeadingType } from "../../../../general/Heading";
import MultipleChoice from "../../../../general/MultipleChoice";
import { StyledHeading, Wrapper } from "./styled";

type MultipleChoiceQuestionProps = {
  nextQuestion?: IQuickscanQuestion;
} & IQuickscanQuestion;

const MultipleChoiceQuestion: React.FC<MultipleChoiceQuestionProps> = ({
  id,
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
      <StyledHeading headingType={HeadingType.Secondary}>
        {question}
      </StyledHeading>

      <MultipleChoice
        name={id!}
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
