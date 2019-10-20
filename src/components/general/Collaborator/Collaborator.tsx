import React from "react";
import IUser from "../../../types/IUser";
import Paragraph, { ParagraphSize } from "../Paragraph";
import { Wrapper } from "./styled";

const Collaborator: React.FC<IUser> = ({ fullName, tags }) => (
  <Wrapper>
    <Paragraph paragraphSize={ParagraphSize.Small}>{fullName}</Paragraph>

    {tags && (
      <Paragraph paragraphSize={ParagraphSize.Small}>
        {tags.join(" - ")}
      </Paragraph>
    )}
  </Wrapper>
);

export default Collaborator;
