import styled, { css } from "styled-components";
import { FontWeight } from "../../../data/style/variables";
import Paragraph from "../../general/Paragraph";
import Wrapper from "../../general/Wrapper";
import { RichtTextTypes } from "./data";

export const RichTextWrapper = styled(Wrapper)`
  margin: 10rem auto;
`;

export const RichTextParagraph = styled(Paragraph)``;

const styleMap = {
  [RichtTextTypes.Bold]: css`
    font-weight: ${FontWeight.Bold};
  `,
  [RichtTextTypes.Regular]: css`
    font-weight: ${FontWeight.Regular};
  `
};

export const RichTextSpan = styled.span<{ type: RichtTextTypes }>`
  ${props => styleMap[props.type]}
`;
