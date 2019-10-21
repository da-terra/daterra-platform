import React, { Fragment } from "react";
import IProject from "../../../../../types/IProject";
import { HeadingType } from "../../../Heading";
import { ParagraphColor } from "../../../Paragraph";
import { ProjectPartner, ProjectTitle, Times, Paragraph } from "./styled";

const ActiveProjectCard: React.FC<IProject> = ({
  title,
  owner,
  updatedDate,
  duration
}) => (
  <Fragment>
    <ProjectPartner {...owner} />

    <ProjectTitle type={HeadingType.Secondary} serif>
      {title}
    </ProjectTitle>

    <Times>
      <Paragraph preserveWhitespace>
        <strong>Looptijd</strong>
        {"\n"}
        <time dateTime={duration!.endDate}>{duration!.endDate}</time>
      </Paragraph>

      <Paragraph paragraphColor={ParagraphColor.Muted} preserveWhitespace>
        <strong>Laatste update</strong>
        {"\n"}
        <time dateTime={updatedDate}>{updatedDate}</time>
      </Paragraph>
    </Times>
  </Fragment>
);

export default ActiveProjectCard;
