import React, { Fragment } from "react";
import { MultipleChoiceQuestion, RangeQuestion, SubmitButton } from "./styled";

type QuestionProps = {
  question: IQuickScanQuestion;
  nextQuestion?: IQuickScanQuestion;
};

const Question: React.FC<QuestionProps> = props => {
  const { question, nextQuestion } = props;

  const Component = question.options ? MultipleChoiceQuestion : RangeQuestion;

  return (
    <Fragment>
      <Component {...question} />

      {!question.options && (
        <SubmitButton question={nextQuestion} />
      )}
    </Fragment>
  );
};

export default Question;
