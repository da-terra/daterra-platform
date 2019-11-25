import React from "react";
import MultipleChoiceQuestion from "../MultipleChoiceQuestion";
import RangeQuestion from "../RangeQuestion";

type QuestionProps = IQuickScanQuestion;

const Question: React.FC<QuestionProps> = props => {
  const { options } = props;

  const Component =
    options ? MultipleChoiceQuestion : RangeQuestion;

  return <Component {...props} />;
};

export default Question;
