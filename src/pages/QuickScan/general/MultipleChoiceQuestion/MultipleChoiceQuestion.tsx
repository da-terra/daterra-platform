import React from "react";
import { HeadingType } from "../../../../components/general/Heading";
import { Wrapper, Question, OptionList, OptionItem, Option } from "./styled";

type MultipleChoiceQuestionProps = IQuickScanQuestion;

const MultipleChoiceQuestion: React.FC<MultipleChoiceQuestionProps> = ({
  _id,
  question,
  options
}) => {
  if (!options) {
    throw new Error("Cannot render multiple choice question without options");
  }

  return (
    <Wrapper>
      <Question headingType={HeadingType.Secondary}>{question}</Question>

      <OptionList>
        {options.map(({ label, ...option }) => (
          <OptionItem key={option.score}>
            <Option type="button" name={_id} value={option.score} inverted>
              {label}
            </Option>
          </OptionItem>
        ))}
      </OptionList>

      <button type="submit">submit</button>
    </Wrapper>
  );
};
export default MultipleChoiceQuestion;
