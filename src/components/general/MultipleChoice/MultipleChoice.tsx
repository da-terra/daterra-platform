import React from "react";
import { Wrapper, Question, OptionWrapper, Option } from "./styled";

type Option = {
  id: string;
  label: React.ReactNode;
  value: any;
  info?: string;
};

type MultipleChoiceProps = {
  question: React.ReactNode;
  options: Option[];
};

const MultipleChoice: React.FC<MultipleChoiceProps> = ({
  question,
  options
}) => (
  <Wrapper>
    <Question>{question}</Question>

    <OptionWrapper>
      {options.map(({ label, id, ...option }) => (
        <Option {...option}>{label}</Option>
      ))}
    </OptionWrapper>
  </Wrapper>
);

export default MultipleChoice;
