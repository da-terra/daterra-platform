import React, { useCallback, useContext } from "react";
import { Context as QuickScanContext } from "../../QuickScan";
import {
  FormWrapper,
  MultipleChoiceQuestion,
  RangeQuestion,
} from "./styled";

type QuestionProps = {
  question: IQuickScanQuestion;
  nextQuestion?: IQuickScanQuestion;
  next: () => void;
};

const Question: React.FC<QuestionProps> = ({
  question,
  nextQuestion,
  next
}) => {
  const Component = question.options && question.options.length //
    ? MultipleChoiceQuestion
    : RangeQuestion;

  const quickScanContext = useContext(QuickScanContext);

  const onSubmitHandler = useCallback(
    (submitEvent: React.FormEvent<HTMLFormElement>) => {
      submitEvent.preventDefault();

      const formData = new FormData(submitEvent.currentTarget);

      const questionId = question._id;
      const value = parseFloat(formData.get(questionId) as string);

      // Validate answer
      if (!(value >= 0)) {
        return;
      }

      // Save question to results object
      quickScanContext.setResult({
        ...quickScanContext.result,
        answers: {
          ...quickScanContext.result.answers,
          [questionId]: value
        }
      });

      next();
    },
    [next, question, quickScanContext]
  );

  return (
    <FormWrapper onSubmit={onSubmitHandler}>
      <Component {...question} key={question._id} nextQuestion={nextQuestion} />
    </FormWrapper>
  );
};

export default Question;
