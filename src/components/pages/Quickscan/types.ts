import { IQuickscanQuestion } from "@data-science-platform/shared";

export type QuickscanProps = {
  children: React.ReactNode;
};

export type QueryResponse = {
  quickscanQuestions: IQuickscanQuestion[];
};

export type QuickscanContextType = {
  data?: QueryResponse;

  progress: number;
  setProgress: (value: number) => void;

  result: IQuickscanResultInput;
  setResult: (value: IQuickscanResultInput) => void;
};
