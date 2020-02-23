import { IProject } from "@data-science-platform/shared";
import { differenceInSeconds } from "date-fns";
import React, { Fragment } from "react";
import { FormattedRelativeTime } from "react-intl";
import {
  FontColor,
  FontSize,
  FontWeight
} from "../../../../../data/style/variables";
import { HeadingType } from "../../../Heading";
import { ProjectOwner, ProjectTitle, Time } from "./styled";

const FinishedProject: React.FC<IProject> = ({ title, duration, team }) => {
  const teamLead = team.find(user => user.role === 2)!;
  const endDate = new Date(duration!.endDate);

  return (
    <Fragment>
      <ProjectTitle headingType={HeadingType.Secondary} serif>
        {title}
      </ProjectTitle>

      {duration && (
        <Time
          as="time"
          dateTime={endDate.toISOString()}
          fontSize={FontSize.Small}
          fontWeight={FontWeight.Bold}
          fontColor={FontColor.Secondary}
          italic
        >
          <FormattedRelativeTime
            value={differenceInSeconds(endDate, new Date())}
            updateIntervalInSeconds={30}
          />
        </Time>
      )}

      <ProjectOwner {...teamLead} />
    </Fragment>
  );
};

export default FinishedProject;
