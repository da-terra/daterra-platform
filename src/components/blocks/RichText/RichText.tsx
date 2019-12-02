import React from "react";
import { Node } from "slate";
import RichTextEditor from "../../general/RichTextEditor";

type RichTextProps = {
  nodes: Node[];
};

/**
 * Read-only Slate editor
 */
const RichText: React.FC<RichTextProps> = ({ nodes }) => (
  <RichTextEditor value={nodes} readOnly />
);

export default RichText;
