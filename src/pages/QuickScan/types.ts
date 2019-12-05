export type QuickScanProps = {
  children: React.ReactNode;
};

export type QueryResponse = {
  quickScanQuestions: IQuickScanQuestions;
};

export type QuickScanContextType = {
  data?: QueryResponse;

  progress: number;
  setProgress: (value: number) => void;

  result: IQuickScanResultInput;
  setResult: (value: IQuickScanResultInput) => void;
};
