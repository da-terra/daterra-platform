import React from "react";
import { IQuickscanQuestion } from "@data-science-platform/shared";
import { SolidButton } from "../../../../../components/general/Button";

type QuickScanQuestionButtonProps = {
  className?: string;
  onClick?: () => void;
  question: IQuickscanQuestion | undefined;
};

const QuickScanQuestionButton: React.FC<QuickScanQuestionButtonProps> = ({
  question,
  ...props
}) => (
  <SolidButton {...props} type="submit">
    {!question ? "Naar volgende stap" : "Naar volgende vraag"}
  </SolidButton>
);

export default QuickScanQuestionButton;
