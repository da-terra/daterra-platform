import styled, { css } from "styled-components";
import {
  FontFamily,
  FontColor,
  FontSize,
  FontWeight
} from "../../../data/style/variables";
import { large, normal, small, richText } from "./styled";

type ParagraphProps = {
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

const paragraphSizes = {
  [FontSize.Large]: large,
  [FontSize.Normal]: normal,
  [FontSize.Small]: small
};

export const paragraphCss = css<ParagraphProps>`
  margin: 0;

  ${props => paragraphSizes[props.fontSize || FontSize.Normal]}

  color: ${props =>
    props.fontColor ? props.theme.copy[props.fontColor] : "currentColor"};

  font-weight: ${props => props.fontWeight || FontWeight.Regular};

  font-family: ${props =>
    props.serif ? FontFamily.RobotoSlab : FontFamily.Roboto};

  // Style for alignment and style
  ${props => props.center && "text-align: center;"}
  ${props => props.left && "text-align: left;"}
  ${props => props.right && "text-align: right;"}
  ${props => props.italic && "font-style: italic;"};

  // Add rich text styling when richText prop is true
  ${props => props.richText && richText};
`;

/** Export paragraph element with paragraph css as default */
const Paragraph = styled.p<ParagraphProps>`
  ${paragraphCss}
`;

Paragraph.defaultProps = {
  fontSize: FontSize.Normal
};

export default Paragraph;
