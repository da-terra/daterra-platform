import React from "react";
import { ICollaborator } from "../../../data/type/ICaseStudy";
import Paragraph, { ParagraphType } from "../Paragraph";
import { Wrapper } from "./styled";

const Collaborator: React.FC<ICollaborator> = ({ fullName, tags }) => (
  <Wrapper>
    <Paragraph type={ParagraphType.Small}>{fullName}</Paragraph>
    <Paragraph type={ParagraphType.Muted}>{tags.join(" - ")}</Paragraph>
  </Wrapper>
);

export default Collaborator;
