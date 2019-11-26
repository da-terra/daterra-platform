import React, { useCallback, useState } from "react";
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

  const [value, setValue] = useState<string>("");

  const handleOptionClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setValue(event.currentTarget.value);
    },
    []
  );

  return (
    <Wrapper>
      <Question headingType={HeadingType.Secondary}>{question}</Question>

      <OptionList>
        {options.map(({ label, ...option }) => (
          <OptionItem key={option.score}>
            <Option
              onClick={handleOptionClick}
              value={option.score}
              focussed={value === option.score.toString()}
              inverted
            >
              {label}
            </Option>
          </OptionItem>
        ))}
      </OptionList>

      <input type="hidden" name={_id} value={value} />
    </Wrapper>
  );
};
export default MultipleChoiceQuestion;
