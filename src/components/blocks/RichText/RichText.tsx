import React from "react";
import { Node } from "slate";
import RichTextEditor from "../../general/RichTextEditor";
import Wrapper, { WrapperWidth } from "../../general/Wrapper";

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
