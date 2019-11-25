import React from "react";
import { Wrapper, Question, OptionWrapper, Option } from "./styled";

type MultipleChoiceQuestionProps = IQuickScanQuestion;

const MultipleChoiceQuestion: React.FC<MultipleChoiceQuestionProps> = ({
  question,
  options
}) => {
  if (!options) {
    throw new Error("Cannot render multiple choice question without options");
  }

  return (
    <Wrapper>
      <Question>{question}</Question>

      <OptionWrapper>
        {options.map(({ label, ...option }) => (
          <Option {...option}>{label}</Option>
        ))}
      </OptionWrapper>
    </Wrapper>
  );
};
export default MultipleChoiceQuestion;
