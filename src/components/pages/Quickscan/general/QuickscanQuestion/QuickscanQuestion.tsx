import { IQuickscanQuestion } from "@data-science-platform/shared";
import React, { useCallback, useContext } from "react";
import { Context as QuickscanContext } from "../../Quickscan";
import MultipleChoiceQuestion from "../MultipleChoiceQuestion";
import RangeQuestion from "../RangeQuestion";
import { FormWrapper } from "./styled";

type QuestionProps = {
  question: IQuickscanQuestion;
  nextQuestion?: IQuickscanQuestion;
  next: () => void;
};

const Question: React.FC<QuestionProps> = ({
  question,
  nextQuestion,
  next
}) => {
  const Component =
    question.options && question.options.length //
      ? MultipleChoiceQuestion
      : RangeQuestion;

  const quickscanContext = useContext(QuickscanContext);

  const onSubmitHandler = useCallback(
    (submitEvent: React.FormEvent<HTMLFormElement>) => {
      submitEvent.preventDefault();

      const formData = new FormData(submitEvent.currentTarget);

      const questionId = question.id!;
      const value = parseFloat(formData.get(questionId) as string);

      // Validate answer
      if (!(value >= 0)) {
        return;
      }

      // Save question to results object
      quickscanContext.setResult({
        ...quickscanContext.result,
        answers: {
          ...quickscanContext.result.answers,
          [questionId]: value
        }
      });

      next();
    },
    [next, question, quickscanContext]
  );

  return (
    <FormWrapper onSubmit={onSubmitHandler}>
      <Component {...question} key={question.id} nextQuestion={nextQuestion} />
    </FormWrapper>
  );
};

export default Question;
