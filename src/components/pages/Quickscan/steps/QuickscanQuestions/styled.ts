import styled from "styled-components";
import Paragraph from "../../../../../components/general/Paragraph";
import QuickscanQuestionButton from "../../general/QuickscanQuestionButton";
import Wrapper from "../../../../../components/general/Wrapper";
import { Breakpoints } from "../../../../../data/style/variables";

export const Content = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  width: 100%;
  min-height: 100vh;
  padding: 10rem 0;
  pointer-events: none;

  @media (max-width: ${Breakpoints.H1000}) {
    position: relative;
    min-height: 0;
    padding: 6.4rem 0;
  }
`;

export const Form = styled(Wrapper)`
  margin: 4rem auto;
  pointer-events: all;
  display: flex;
  flex-direction: column;
`;

export const FormHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5.2rem;

  @media (max-width: ${Breakpoints.H500}) {
    display: block;
  }
`;

export const QuestionIndex = styled(Paragraph)`
  margin-left: auto;
`;

export const SubmitButton = styled(QuickscanQuestionButton)`
  margin: 6.2rem auto 0;
`;
