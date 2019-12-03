import React from "react";
import { RenderElementProps } from "slate-react";
import { StyledParagraph } from "./styled";

const ParagraphNode: React.FC<RenderElementProps> = ({
  children,
  attributes
}) => <StyledParagraph {...attributes}>{children}</StyledParagraph>;

export default ParagraphNode;
