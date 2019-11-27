import React, { Fragment } from "react";
import { Question, Range, SubmitButton } from "./styled";
import { HeadingType } from "../../../../components/general/Heading";

type RangeQuestionProps = {
  nextQuestion?: IQuickScanQuestion;
} & IQuickScanQuestion;

const RangeQuestion: React.FC<RangeQuestionProps> = ({
  _id,
  question,
  min,
  max,
  nextQuestion
}) => (
  <Fragment>
    <Question headingType={HeadingType.Secondary}>{question}</Question>

    <Range
      name={_id}
      min={min}
      max={max}
      labels={["Niet mee eens", "Mee eens"]}
    />

    <SubmitButton type="submit">
      {(nextQuestion && nextQuestion.salutation) || "Naar volgende vraag"}
    </SubmitButton>
  </Fragment>
);

export default RangeQuestion;
