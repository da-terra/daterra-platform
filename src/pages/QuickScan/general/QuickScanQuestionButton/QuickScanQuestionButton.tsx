import React from "react";
import { SolidButton } from "../../../../components/general/Button";

type QuickScanQuestionButtonProps = {
  className?: string;
  onClick?: () => void
  question: IQuickScanQuestion | undefined;
};

const QuickScanQuestionButton: React.FC<QuickScanQuestionButtonProps> = ({
  question,
  ...props
}) => (
  <SolidButton {...props} type="submit">
    {!question
      ? "Naar volgende stap"
      : question.salutation || "Naar volgende vraag"}
  </SolidButton>
);

export default QuickScanQuestionButton;
