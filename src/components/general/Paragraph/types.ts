import { ParagraphColor, ParagraphSize, ParagraphWeight } from "./data";

export type ParagraphProps = {
  paragraphColor?: ParagraphColor;
  paragraphSize?: ParagraphSize;
  paragraphWeight?: ParagraphWeight;
  italic?: boolean;
  left?: boolean;
  center?: boolean;
  right?: boolean;
  serif?: boolean;
};
