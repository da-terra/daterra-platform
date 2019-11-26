import React, { Fragment } from "react";
import { Question, Range } from "./styled";
import { HeadingType } from "../../../../components/general/Heading";

type RangeQuestionProps = IQuickScanQuestion;

const RangeQuestion: React.FC<RangeQuestionProps> = ({
  _id,
  question,
  min,
  max
}) => (
  <Fragment>
    <Question headingType={HeadingType.Secondary}>{question}</Question>

    <Range
      name={_id}
      min={min}
      max={max}
      labels={["Niet mee eens", "Mee eens"]}
    />
  </Fragment>
);

export default RangeQuestion;
