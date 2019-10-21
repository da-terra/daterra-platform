import React from "react";
import IUser from "../../../types/IUser";
import Paragraph, {
  ParagraphSize,
  ParagraphWeight,
  ParagraphColor
} from "../Paragraph";
import { Wrapper } from "./styled";

// TODO Discuss if this should be renamed to Author, Author seems more appropiate to me
const Collaborator: React.FC<IUser> = ({ fullName, tags }) => (
  <Wrapper>
    <Paragraph
      paragraphSize={ParagraphSize.Small}
      paragraphWeight={ParagraphWeight.Bold}
    >
      {fullName}
    </Paragraph>

    {tags && (
      <Paragraph
        paragraphSize={ParagraphSize.Small}
        paragraphColor={ParagraphColor.Muted}
      >
        {tags.join(" - ")}
      </Paragraph>
    )}
  </Wrapper>
);

export default Collaborator;
