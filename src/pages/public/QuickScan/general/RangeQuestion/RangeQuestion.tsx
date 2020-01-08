import React, { Fragment } from "react";
import { Question, Range, SubmitButton } from "./styled";
import { HeadingType } from "../../../../../components/general/Heading";
import { IQuickscanQuestion } from "@data-science-platform/shared";

type RangeQuestionProps = {
  nextQuestion?: IQuickscanQuestion;
} & IQuickscanQuestion;

const RangeQuestion: React.FC<RangeQuestionProps> = ({
  id,
  question,
  min,
  max,
  nextQuestion
}) => (
  <Fragment>
    <Question headingType={HeadingType.Secondary}>{question}</Question>

    <Range
      name={id!}
      min={min}
      max={max}
      labels={["Niet mee eens", "Mee eens"]}
    />

    <SubmitButton type="submit">
      {!nextQuestion ? "Naar volgende stap" : "Naar volgende vraag"}
    </SubmitButton>
  </Fragment>
);

export default RangeQuestion;
