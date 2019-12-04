import React from "react";
import { Node } from "slate";
import { WrapperWidth } from "../../general/Wrapper";
import { Wrapper, RichTextEditor } from "./styled";

type RichTextProps = {
  nodes: Node[];
};

/**
 * Read-only Slate editor
 */
const RichText: React.FC<RichTextProps> = ({ nodes }) => (
  <Wrapper width={WrapperWidth.Smaller}>
    <RichTextEditor value={nodes} readOnly />
  </Wrapper>
);

export default RichText;
