import React, { useCallback } from 'react';
import { Editor } from 'slate';
import { useSlate } from 'slate-react';
import { MarkIconButton } from './styled';

const isMarkActive = (editor: Editor, format: string) => {
  const marks = Editor.marks(editor) as { [name: string]: any };
  return marks ? marks[format] === true : false
}

type MarkButtonProps = {
  format: string,
  children: React.ReactNode,
}

const MarkButton: React.FC<MarkButtonProps> = ({ format, children }) => {
  const editor = useSlate()

  const clickCallback = useCallback(event => {
    event.preventDefault()
    console.log(editor.exec);
    editor.exec({ type: 'format_text', properties: { [format]: true } })
  }, [editor, format]);

  return (
    <MarkIconButton
      active={isMarkActive(editor, format)}
      onClick={clickCallback}
    >
      {children}
    </MarkIconButton>
  )
}

export default MarkButton;