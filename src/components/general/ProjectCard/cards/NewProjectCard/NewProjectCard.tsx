import { IProject } from "@data-science-platform/shared";
import React, { Fragment } from "react";
import { FormattedDate, FormattedMessage } from "react-intl";
import {
  FontColor,
  FontSize,
  FontWeight
} from "../../../../../data/style/variables";
import { HeadingType } from "../../../Heading";
import Organization from "../../../Organization";
import Paragraph from "../../../Paragraph";
import { ProjectDetails, ProjectTitle, Times, TimeString } from "./styled";

const NewProjectCard: React.FC<IProject> = ({
  title,
  duration,
  team,
  organizations
}) => {
  const [firstOrganization] = organizations || [];

  return (
    <Fragment>
      {firstOrganization && <Organization {...firstOrganization} />}

      <ProjectTitle headingType={HeadingType.Secondary} serif>
        {title}
      </ProjectTitle>

      <Times>
        <TimeString fontWeight={FontWeight.Bold}>
          <FormattedMessage id="NewProjectCard_durationTitle" />
        </TimeString>

        <TimeString italic>
          <FormattedMessage
            id="NewProjectCard_duration"
            values={{
              startDate: <FormattedDate value={duration?.startDate} />,
              endDate: <FormattedDate value={duration?.endDate} />
            }}
          />
        </TimeString>
      </Times>

      <ProjectDetails>
        <Paragraph
          fontColor={FontColor.Secondary}
          fontSize={FontSize.Small}
          fontWeight={FontWeight.Bold}
        >
          <FormattedMessage
            id="NewProjectCard_registrations"
            values={{ n: team.length }}
          />
        </Paragraph>

        <Paragraph fontSize={FontSize.Small} fontWeight={FontWeight.Bold}>
          € 250
        </Paragraph>
      </ProjectDetails>
    </Fragment>
  );
};
export default NewProjectCard;
