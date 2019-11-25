import React, { Fragment } from "react";
import { Question, Range } from "./styled";
import { HeadingType } from "../Heading";

type RangeQuestionProps = IQuickScanQuestion;

const RangeQuestion: React.FC<RangeQuestionProps> = ({ question }) => (
  <Fragment>
    <Question headingType={HeadingType.Secondary}>{question}</Question>

    <Range name="score" labels={["Niet mee eens", "Mee eens"]} />
  </Fragment>
);

export default RangeQuestion;
