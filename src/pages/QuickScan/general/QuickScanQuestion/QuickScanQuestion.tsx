import React from "react";
import { MultipleChoiceQuestion, RangeQuestion, SubmitButton } from "./styled";

type QuestionProps = {
  question: IQuickScanQuestion;
  nextQuestion?: IQuickScanQuestion;
  next: () => void;
};

const Question: React.FC<QuestionProps> = props => {
  const { question, nextQuestion, next } = props;

  const Component = question.options ? MultipleChoiceQuestion : RangeQuestion;

  console.log(question);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        console.log(Array.from(new FormData(e.currentTarget).entries()));
        next();
      }}
    >
      <Component {...question} />

      {!question.options && <SubmitButton question={nextQuestion} />}
    </form>
  );
};

export default Question;
