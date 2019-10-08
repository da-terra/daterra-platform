import styled, { css } from "styled-components";
import { FontWeight, FontFamily } from "../../../data/style/variables";

export enum ParagraphType {
  Primary,
  Secondary,
  Tertiary
}

type ParagraphProps = {
  type?: ParagraphType;
  italic?: boolean;
  left?: boolean;
  center?: boolean;
  right?: boolean;
};

const primary = css`
  font-size: 1.8rem;
  line-height: 3.2rem;
  font-weight: ${FontWeight.REGULAR};
  font-family: ${FontFamily.ROBOTO_SLAB};
`;

const secondary = css`
  font-weight: ${FontWeight.REGULAR};
  font-family: ${FontFamily.ROBOTO};
  font-size: 2rem;
  font-size: 2.5rem;
`;

const tertiary = css`
  font-weight: ${FontWeight.REGULAR};
  font-family: ${FontFamily.ROBOTO};
  font-size: 1.8rem;
  line-height: 2.5rem;
`;

// Map to get the right styles for the right type
const styleMap = {
  [ParagraphType.Primary]: primary,
  [ParagraphType.Secondary]: secondary,
  [ParagraphType.Tertiary]: tertiary
};

const Paragraph = styled.p<ParagraphProps>`
  white-space: pre-line;

  // Get paragraph style from style map
  ${props => styleMap[props.type || ParagraphType.Primary]}

  // Style for align properties
  ${props => props.center && "text-align: center;"}
  ${props => props.left && "text-align: left;"}
  ${props => props.right && "text-align: right;"}

  ${props => props.italic && "font-style: italic;"}

  a {
    color: ${props => props.theme.color.foreground};
    font-weight: ${FontWeight.BOLD};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Paragraph;
