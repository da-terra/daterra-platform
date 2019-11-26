import React, { Fragment, useContext, useReducer } from "react";
import { Redirect } from "react-router";
import RoutePath from "../../../../data/RoutePath";
import { FontColor, FontWeight } from "../../../../data/style/variables";
import { HeadingType } from "../../../../components/general/Heading";
import { WrapperWidth } from "../../../../components/general/Wrapper";
import { Context as QuickScanContext } from "../../QuickScan";
import reducer, { initialReducerState, Action } from "./reducer";
import {
  Circle,
  Content,
  FormWrapper,
  FormHeader,
  FormHeading,
  QuestionIndex,
  QuickScanQuestion
} from "./styled";

const QuickScanQuestions = () => {
  const quickScanContext = useContext(QuickScanContext);

  const [state, dispatch] = useReducer(reducer, initialReducerState);

  const questions = quickScanContext.response!.quickScanQuestions;
  const questionCount = questions.length;

  const currentIndex = state.currentIndex;

  if (quickScanContext.result.company == null) {
    return <Redirect to={RoutePath.QuickScanOnboarding} />;
  }

  if (currentIndex >= questionCount) {
    return <Redirect to={RoutePath.QuickScanResult} />;
  }

  return (
    <Fragment>
      <Circle x={25} y={-20} />

      <Content>
        <FormWrapper width={WrapperWidth.Smaller}>
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

          <QuickScanQuestion
            question={questions[currentIndex]}
            nextQuestion={questions[currentIndex + 1]}
            next={() => dispatch({ type: Action.Increment })}
          />
        </FormWrapper>
      </Content>
    </Fragment>
  );
};

export default QuickScanQuestions;
