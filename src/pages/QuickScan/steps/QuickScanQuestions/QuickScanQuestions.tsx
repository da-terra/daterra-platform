import React, { Fragment, useContext, useReducer } from "react";
import { Redirect } from "react-router";
import { HeadingType } from "../../../../components/general/Heading";
import { FontColor } from "../../../../data/style/variables";
import { QuickScanContext } from "../../QuickScan";
import RoutePath from "../../../../data/RoutePath";
import reducer, { initialReducerState, Action } from "./reducer";
import {
  Circle,
  Content,
  FormWrapper,
  FormHeading,
  SubmitButton
} from "./styled";

// Move
import Paragraph from "../../../../components/general/Paragraph";

const QuickScanQuestions = () => {
  const quickScanContext = useContext(QuickScanContext);

  const [state, dispatch] = useReducer(reducer, initialReducerState);

  const questionCount = quickScanContext.quickScan!.questions.length;
  const currentIndex = state.currentIndex;

  if (quickScanContext.quickScan && currentIndex >= questionCount) {
    debugger;
    return <Redirect to={RoutePath.QuickScanResult} />;
  }

  const currentQuestion = quickScanContext.quickScan!.questions[currentIndex];
  const isLastQuestion = currentIndex + 1 === questionCount;

  return (
    <Fragment>
      <Circle x={25} y={-20} />

      <Content>
        <FormWrapper>
          <FormHeading
            headingType={HeadingType.Secondary}
            fontColor={FontColor.Accent}
          >
            Quick Scan (Vraag {currentIndex + 1} van de {questionCount})
          </FormHeading>

          <Paragraph>{currentQuestion.question}</Paragraph>
          {JSON.stringify(currentQuestion)}

          <SubmitButton onClick={() => dispatch({ type: Action.Increment })}>
            {isLastQuestion ? "Naar volgende stap" : "Naar volgende vraag"}
          </SubmitButton>
        </FormWrapper>
      </Content>
    </Fragment>
  );
};

export default QuickScanQuestions;
