import React from "react";
import { IQuickscanQuestion } from "@data-science-platform/shared";
import { SolidButton } from "../../../../../components/general/Button";

type QuickscanQuestionButtonProps = {
  className?: string;
  onClick?: () => void;
  question: IQuickscanQuestion | undefined;
};

const QuickscanQuestionButton: React.FC<QuickscanQuestionButtonProps> = ({
  question,
  ...props
}) => (
  <SolidButton {...props} type="submit">
    {!question ? "Naar volgende stap" : "Naar volgende vraag"}
  </SolidButton>
);

export default QuickscanQuestionButton;
