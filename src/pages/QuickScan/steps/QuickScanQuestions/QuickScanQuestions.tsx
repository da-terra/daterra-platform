import React, { Fragment, useContext, useReducer } from "react";
import { Redirect } from "react-router";
import { HeadingType } from "../../../../components/general/Heading";
import { FontColor, FontWeight } from "../../../../data/style/variables";
import { QuickScanContext } from "../../QuickScan";
import RoutePath from "../../../../data/RoutePath";
import reducer, { initialReducerState, Action } from "./reducer";
import {
  Circle,
  Content,
  FormWrapper,
  FormHeader,
  FormHeading,
  QuestionIndex,
  QuickScanQuestion,
  SubmitButton
} from "./styled";

const QuickScanQuestions = () => {
  const quickScanContext = useContext(QuickScanContext);

  const [state, dispatch] = useReducer(reducer, initialReducerState);

  const questions = quickScanContext.response!.quickScanQuestions;
  const questionCount = questions.length;

  const currentIndex = state.currentIndex;

  if (currentIndex >= questionCount) {
    return <Redirect to={RoutePath.QuickScanResult} />;
  }

  const nextQuestion = questions[currentIndex + 1];

  return (
    <Fragment>
      <Circle x={25} y={-20} />

      <Content>
        <FormWrapper>
          <FormHeader>
            <FormHeading
              headingType={HeadingType.Secondary}
              fontColor={FontColor.Accent}
            >
              Quick Scan
            </FormHeading>

            <QuestionIndex
              fontColor={FontColor.Secondary}
              fontWeight={FontWeight.Bold}
            >
              Vraag {currentIndex + 1} van {questionCount}
            </QuestionIndex>
          </FormHeader>

          <QuickScanQuestion {...questions[currentIndex]} />

          <SubmitButton onClick={() => dispatch({ type: Action.Increment })}>
            {!nextQuestion
              ? "Naar volgende stap"
              : nextQuestion.salutation || "Naar volgende vraag"}
          </SubmitButton>
        </FormWrapper>
      </Content>
    </Fragment>
  );
};

export default QuickScanQuestions;
