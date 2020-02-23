import { FontColor, FontSize, FontWeight } from "../../../data/style/variables";

export { default, paragraphCss } from "./Paragraph";

export type ParagraphProps = {
  fontColor?: FontColor;
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  italic?: boolean;
  left?: boolean;
  center?: boolean;
  right?: boolean;
  serif?: boolean;
  preserveWhitespace?: boolean;
  richText?: boolean;
};
