import React from "react";
import IUser from "../../../types/IUser";
import { FontColor, FontSize, FontWeight } from "../../../data/style/variables";
import Paragraph from "../Paragraph";
import { Wrapper } from "./styled";

type CollaboratorProps = IUser & {
  className?: string;
};

// TODO Discuss if this should be renamed to Author, Author seems more appropiate to me
const Collaborator: React.FC<CollaboratorProps> = ({
  fullName,
  tags,
  className
}) => (
  <Wrapper className={className}>
    <Paragraph fontSize={FontSize.Small} fontWeight={FontWeight.Bold}>
      {fullName}
    </Paragraph>

    {tags && (
      <Paragraph fontSize={FontSize.Small} fontColor={FontColor.Muted}>
        {tags.join(" - ")}
      </Paragraph>
    )}
  </Wrapper>
);

export default Collaborator;
