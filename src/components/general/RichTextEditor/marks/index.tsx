import React from "react";
import { RenderMarkProps } from "slate-react";

type MarkFunc = ((props: RenderMarkProps) => JSX.Element) | undefined;

const Mark: MarkFunc = ({
  attributes,
  children,
  mark
}) => {
  switch (mark.type) {
    case "bold":
      return <strong {...attributes}>{children}</strong>;
    case "code":
      return <code {...attributes}>{children}</code>;
    case "italic":
      return <em {...attributes}>{children}</em>;
    case "underlined":
      return <u {...attributes}>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};

export default Mark;
