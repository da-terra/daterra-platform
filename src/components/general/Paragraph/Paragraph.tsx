import styled, { css } from "styled-components";
import { FontWeight, FontFamily } from "../../../data/style/variables";

export enum ParagraphType {
  Primary,
  Secondary,
  Muted,
  Small
}

const primary = css`
  font-family: ${FontFamily.ROBOTO_SLAB};
  font-weight: ${FontWeight.REGULAR};
  font-size: 1.8rem;
  line-height: 3.2rem;
`;

const secondary = css`
  font-family: ${FontFamily.ROBOTO};
  font-weight: ${FontWeight.REGULAR};
  font-size: 1.8rem;
  line-height: 2.5rem;
`;

const muted = css`
  font-family: ${FontFamily.ROBOTO};
  font-weight: ${FontWeight.REGULAR};
  font-size: 1.4rem;
  line-height: 2rem;
  color: ${props => props.theme.copy.muted};
`;

const small = css`
  font-family: ${FontFamily.ROBOTO};
  font-weight: ${FontWeight.BLACK};
  font-size: 1.6rem;
  line-height: 2rem;
`;

// Map to get the right styles for the right type
const styleMap = {
  [ParagraphType.Primary]: primary,
  [ParagraphType.Secondary]: secondary,
  [ParagraphType.Muted]: muted,
  [ParagraphType.Small]: small
};

export type ParagraphProps = {
  paragraphType?: ParagraphType;
  italic?: boolean;
  left?: boolean;
  center?: boolean;
  right?: boolean;
  serif?: boolean;
};

export const paragraphCss = css<ParagraphProps>`
white-space: pre-line;
  margin: 0;

  // Get paragraph style from style map
  ${props => styleMap[props.paragraphType || ParagraphType.Primary]}

  // Style for align properties
  ${props => props.center && "text-align: center;"}
  ${props => props.left && "text-align: left;"}
  ${props => props.right && "text-align: right;"}

  font-family: ${props =>
    props.serif ? FontFamily.ROBOTO_SLAB : FontFamily.ROBOTO};

  font-style: ${props => (props.italic ? "italic" : "normal")};

  a {
    color: currentColor;
    font-weight: ${FontWeight.BOLD};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Paragraph = styled.p<ParagraphProps>`
  ${paragraphCss}
`;

export default Paragraph;
