import { IQuickscanQuestion } from "@data-science-platform/shared";
import React, { Fragment } from "react";
import Heading, { HeadingType } from "../../../../general/Heading";
import Range from "../../../../general/Range";
import { SubmitButton } from "./styled";

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
    <Heading headingType={HeadingType.Secondary}>{question}</Heading>

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
