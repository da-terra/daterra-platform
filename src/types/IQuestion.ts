import Target from "../data/TargetGroup";

declare global {
  type IQuestion = {
    question: string;
    target: Target;
    body: string;
  };
}

export {};
