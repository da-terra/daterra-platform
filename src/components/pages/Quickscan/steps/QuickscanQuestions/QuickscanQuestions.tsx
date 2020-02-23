import React, { Fragment, useContext, useReducer } from "react";
import { Redirect } from "react-router";
import Heading, {
  HeadingType
} from "../../../../../components/general/Heading";
import { WrapperWidth } from "../../../../../components/general/Wrapper";
import RoutePath from "../../../../../data/RoutePath";
import { FontColor, FontWeight } from "../../../../../data/style/variables";
import Header from "../../../../blocks/Header";
import Circle from "../../../../util/Circle";
import { Context as QuickscanContext } from "../../Quickscan";
import QuickscanQuestion from "../../general/QuickscanQuestion";
import reducer, { Action, initialReducerState } from "./reducer";
import { Form, FormHeader, QuestionIndex } from "./styled";

const QuickscanQuestions = () => {
  const quickscanContext = useContext(QuickscanContext);
  const [state, dispatch] = useReducer(reducer, initialReducerState);

  const questions = quickscanContext.data!.quickscanQuestions;
  const questionCount = questions.length;

  const currentIndex = state.currentIndex;

  if (quickscanContext.result.company == null) {
    return <Redirect to={RoutePath.QuickscanOnboarding} />;
  }

  if (currentIndex >= questionCount) {
    return <Redirect to={RoutePath.QuickscanContactDetails} />;
  }

  return (
    <Fragment>
      <Header />

      <Circle x={25} y={-20} />

      <Form width={WrapperWidth.Smaller}>
        <FormHeader>
          <Heading
            headingType={HeadingType.Secondary}
            fontColor={FontColor.Accent}
          >
            Quick Scan
          </Heading>

          <QuestionIndex
            fontColor={FontColor.Secondary}
            fontWeight={FontWeight.Bold}
          >
            Vraag {currentIndex + 1} van {questionCount}
          </QuestionIndex>
        </FormHeader>

        <QuickscanQuestion
          question={questions[currentIndex]}
          nextQuestion={questions[currentIndex + 1]}
          next={() => dispatch({ type: Action.Increment })}
        />
      </Form>
    </Fragment>
  );
};

export default QuickscanQuestions;
