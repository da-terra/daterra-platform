declare global {
  type IQuickScanQuestionOption = {
    _id: string;
    label: string;
    value: number;
    info: string;
  };

  type IQuickScanQuestion = {
    _id: string;
    question: string;
    target: number;
    body: string;
    salutation: string;
    min: number;
    max: number;
    options?: IQuickScanQuestionOption[];
  };

  type IQuickScanQuestions = IQuickScanQuestion[];
}

export {};
