import React, { Fragment, useContext, useReducer } from "react";
import { Redirect } from "react-router";
import RoutePath from "../../../../data/RoutePath";
import { FontColor, FontWeight } from "../../../../data/style/variables";
import { HeadingType } from "../../../../components/general/Heading";
import { WrapperWidth } from "../../../../components/general/Wrapper";
import { Context as QuickScanContext } from "../../QuickScan";
import reducer, { initialReducerState, Action } from "./reducer";
import {
  Header,
  Circle,
  Form,
  FormHeader,
  FormHeading,
  QuestionIndex,
  QuickScanQuestion
} from "./styled";

const QuickScanQuestions = () => {
  const quickScanContext = useContext(QuickScanContext);
  const [state, dispatch] = useReducer(reducer, initialReducerState);

  const questions = quickScanContext.data!.quickScanQuestions;
  const questionCount = questions.length;

  const currentIndex = state.currentIndex;

  if (quickScanContext.result.company == null) {
    return <Redirect to={RoutePath.QuickScanOnboarding} />;
  }

  if (currentIndex >= questionCount) {
    return <Redirect to={RoutePath.QuickScanContactDetails} />;
  }

  return (
    <Fragment>
      <Header />

      <Circle x={25} y={-20} />

      <Form width={WrapperWidth.Smaller}>
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
      </Form>
    </Fragment>
  );
};

export default QuickScanQuestions;
