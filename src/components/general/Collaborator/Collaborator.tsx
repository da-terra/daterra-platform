import React from "react";
import { IUser } from "@data-science-platform/shared";
import { FontSize, FontWeight } from "../../../data/style/variables";
import Paragraph from "../Paragraph";
import { Wrapper } from "./styled";

type CollaboratorProps = IUser & {
  className?: string;
};

// TODO Discuss if this should be renamed to Author, Author seems more appropiate to me
const Collaborator: React.FC<CollaboratorProps> = ({
  displayName,
  className
}) => (
  <Wrapper className={className}>
    <Paragraph fontSize={FontSize.Small} fontWeight={FontWeight.Bold}>
      {displayName}
    </Paragraph>
  </Wrapper>
);

export default Collaborator;
