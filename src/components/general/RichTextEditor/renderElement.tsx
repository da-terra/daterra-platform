import React from "react";
import { RenderElementProps } from "slate-react";

//
import ParagraphNode from "./components/ParagraphNode";

// List of all elements with a reference to their element type name
const elements: any = {
  paragraph: ParagraphNode
};

const fallbackElement = ParagraphNode;

export default (props: RenderElementProps): JSX.Element => {
  const Component = elements[props.element.type] || fallbackElement;

  console.log(props);

  return <Component {...props} />;
};
