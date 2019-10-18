import React from "react";
import IUser from "../../../types/IUser";
import Paragraph, { ParagraphType } from "../Paragraph";
import { Wrapper } from "./styled";

const Collaborator: React.FC<IUser> = ({ fullName, tags }) => (
  <Wrapper>
    <Paragraph paragraphType={ParagraphType.Small}>{fullName}</Paragraph>

    {tags && (
      <Paragraph paragraphType={ParagraphType.Muted}>
        {tags.join(" - ")}
      </Paragraph>
    )}
  </Wrapper>
);

export default Collaborator;
