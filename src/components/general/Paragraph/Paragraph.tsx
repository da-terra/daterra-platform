import styled, { css } from "styled-components";
import { FontWeight, FontFamily } from "../../../data/style/variables";

enum ParagraphType {
  Primary,
  Secondary
}

export type ParagraphProps = {
  type?: ParagraphType;
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
  font-size: 2rem;
`;

// Map to get the right styles for the right type
const styleMap = {
  [ParagraphType.Primary]: primary,
  [ParagraphType.Secondary]: secondary
};

const Paragraph = styled.p<ParagraphProps>`
  ${props => styleMap[props.type || ParagraphType.Primary]}

  ${props => props.center && "text-align: center"}
`;

export default Paragraph;
