import React, { useMemo } from "react";
import { createEditor, Node } from "slate";
import { Slate, Editable, withReact } from "slate-react";

const defaultValue: Node[] = [
  {
    type: "paragraph",
    children: [
      {
        text: "A line of text in a paragraph.",
        marks: []
      }
    ]
  }
];

type RichTextEditorProps = {
  value?: Node[];
  readOnly?: boolean;
  onChange?: (value: object) => void;
};

const RichTextEditor: React.FC<RichTextEditorProps> = ({
  value,
  readOnly,
  onChange
}) => {
  const editor = useMemo(() => withReact(createEditor()), []);

  return (
    <Slate editor={editor} defaultValue={value || defaultValue}>
      <Editable readOnly={readOnly} onChange={onChange} />
    </Slate>
  );
};

export default RichTextEditor;
