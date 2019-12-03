import React from "react";
import { Node } from "slate";
import { Wrapper, RichTextEditor } from './styled';

type RichTextProps = {
  nodes: Node[];
};

/**
 * Read-only Slate editor
 */
const RichText: React.FC<RichTextProps> = ({ nodes }) => (
  <Wrapper>
    <RichTextEditor value={nodes} readOnly />
  </Wrapper>
);

export default RichText;
