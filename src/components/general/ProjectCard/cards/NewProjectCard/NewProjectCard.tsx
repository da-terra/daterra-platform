import React, { Fragment } from "react";
import { format } from "date-fns";
import IProject from "../../../../../types/IProject";
import { HeadingType } from "../../../Heading";
import {
  FontColor,
  FontSize,
  FontWeight
} from "../../../../../data/style/variables";
import {
  ProjectOwner,
  ProjectTitle,
  Times,
  Paragraph,
  ProjectDetails
} from "./styled";

const dateFormat = "dd MMM yyyy";

const NewProjectCard: React.FC<IProject> = ({
  title,
  duration,
  owner,
  company
}) => (
  <Fragment>
    <ProjectOwner prefix={company.title} {...owner} />

    <ProjectTitle headingType={HeadingType.Secondary} serif>
      {title}
    </ProjectTitle>

    <Times>
      <Paragraph preserveWhitespace>
        <strong>Looptijd</strong>
        {"\n"}

        <time dateTime={duration!.startDate}>
          {format(new Date(duration!.startDate), dateFormat)}
        </time>
        {" t/m "}
        <time dateTime={duration!.endDate}>
          {format(new Date(duration!.endDate), dateFormat)}
        </time>
      </Paragraph>
    </Times>

    <ProjectDetails>
      <Paragraph
        fontColor={FontColor.Muted}
        fontSize={FontSize.Small}
        fontWeight={FontWeight.Bold}
      >
        5 Aanmeldingen
      </Paragraph>
      <Paragraph fontSize={FontSize.Small} fontWeight={FontWeight.Bold}>
        € 250
      </Paragraph>
    </ProjectDetails>
  </Fragment>
);

export default NewProjectCard;
