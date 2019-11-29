import React from "react";
import { RichtTextTypes } from "./data";
import { RichTextWrapper, RichTextParagraph, RichTextSpan } from "./styled";
import { WrapperWidth } from "../../general/Wrapper";

type QuickscanProfileBodyProps = {
  body: {
    uuid: any;
    type: RichtTextTypes;
    children: React.ReactNode;
  }[];
};

const QuickscanProfileBody: React.FC<QuickscanProfileBodyProps> = ({
  body
}) => (
  <RichTextWrapper width={WrapperWidth.Smaller}>
    <RichTextParagraph>
      {body.map(({ children, type, uuid }) => (
        <RichTextSpan type={type} key={uuid}>
          {children}
        </RichTextSpan>
      ))}
    </RichTextParagraph>
  </RichTextWrapper>
);
export default QuickscanProfileBody;
