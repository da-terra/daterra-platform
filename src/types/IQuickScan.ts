declare global {
  type IQuickScanQuestionOption = {
    _id: string;
    label: string;
    score: number;
  };

  type IQuickScanQuestion = {
    question: string;
    target: number;
    body: string;
    salutation: string;
    minScore: number;
    maxScore: number;
    options?: IQuickScanQuestionOption[];
  };

  type IQuickScanQuestions = IQuickScanQuestion[];
}

export {};
