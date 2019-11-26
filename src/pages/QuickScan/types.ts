export type QuickScanProps = {
  children: React.ReactNode;
};

export type QueryResponse = {
  quickScanQuestions: IQuickScanQuestions;
};

export type QuickScanContextType = {
  response?: QueryResponse;

  progress: number;
  setProgress: (value: number) => void;

  result: IQuickScanResult;
  setResult: (value: IQuickScanResult) => void;
};
