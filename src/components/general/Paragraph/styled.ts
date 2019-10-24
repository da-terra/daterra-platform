import styled, { css } from "styled-components";
import { FontWeight, FontFamily } from "../../../data/style/variables";
import { ParagraphWeight, ParagraphSize } from "./data";
import { ParagraphProps } from "./types";

const large = css`
  font-size: 2rem;
  line-height: 3.2rem;
  letter-spacing: 1.1px;
`;

const normal = css`
  font-size: 1.6rem;
  line-height: 2rem;
`;

const small = css`
  font-size: 1.4rem;
  line-height: 2rem;
`;

const paragraphSizes = {
  [ParagraphSize.Large]: large,
  [ParagraphSize.Normal]: normal,
  [ParagraphSize.Small]: small
};

export const paragraphCss = css<ParagraphProps>`
  white-space: pre-line;
  margin: 0;

  ${props =>
    props.paragraphColor && `color: ${props.theme.copy[props.paragraphColor]}`}


  ${props => paragraphSizes[props.paragraphSize || ParagraphSize.Normal]}

  font-weight: ${props =>
    FontWeight[props.paragraphWeight || ParagraphWeight.Regular]}

  font-family: ${props =>
    props.serif ? FontFamily.RobotoSlab : FontFamily.Roboto};

  font-style: ${props => (props.italic ? "italic" : "normal")};

  ${props => props.preserveWhitespace && "white-space: pre-line"}

  // Style for align properties
  ${props => props.center && "text-align: center;"}
  ${props => props.left && "text-align: left;"}
  ${props => props.right && "text-align: right;"}

  a {
    color: currentColor;
    font-weight: ${FontWeight.Bold};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  time {
    font-style: italic;
  }
`;

export const Paragraph = styled.p<ParagraphProps>`
  ${paragraphCss}
`;
