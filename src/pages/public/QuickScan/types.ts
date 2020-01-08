import { IQuickscanQuestion } from "@data-science-platform/shared";

export type QuickScanProps = {
  children: React.ReactNode;
};

export type QueryResponse = {
  quickScanQuestions: IQuickscanQuestion[];
};

export type QuickScanContextType = {
  data?: QueryResponse;

  progress: number;
  setProgress: (value: number) => void;

  result: IQuickscanResultInput;
  setResult: (value: IQuickscanResultInput) => void;
};
