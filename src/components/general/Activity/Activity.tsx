import { createPath, IActivity } from "@data-science-platform/shared";
import { differenceInSeconds } from "date-fns";
import React from "react";
import { FormattedRelativeTime } from "react-intl";
import RoutePath from "../../../data/RoutePath";
import { FontColor, FontWeight } from "../../../data/style/variables";
import { LinkButton } from "../Button";
import Paragraph from "../Paragraph";
import {
  CreatedDate,
  Message,
  MessageDetails,
  StyledAvatar,
  Wrapper
} from "./styled";

const messages: {
  [name: string]: (data: any) => React.ReactNode;
} = {
  createOrganization: data =>
    `Organisatie "${data?.organization?.name}" aangemaakt`
};

const Activity: React.FC<{ activity: IActivity }> = ({ activity }) => {
  const { mutation, data, user } = activity;

  const messageFunc = messages[mutation] || (() => mutation);
  const parsedData = data && JSON.parse(data);

  const [firstPhoto] = user.photos;
  const createdDate = new Date(activity.createdDate);

  return (
    <Wrapper>
      {firstPhoto && (
        <StyledAvatar
          src={firstPhoto?.value}
          alt={user?.displayName}
          fallbackColor="#eee"
        />
      )}

      <Message>
        <MessageDetails>
          <LinkButton
            href={createPath(RoutePath.Cms.User, { id: user.id })}
            fontWeight={FontWeight.Bold}
            serif
          >
            {user.displayName}
          </LinkButton>

          <CreatedDate
            as="time"
            dateTime={createdDate.toISOString()}
            fontColor={FontColor.Secondary}
            serif
          >
            <FormattedRelativeTime
              value={differenceInSeconds(createdDate, new Date())}
              updateIntervalInSeconds={30}
            />
          </CreatedDate>
        </MessageDetails>

        <Paragraph>{messageFunc(parsedData)}</Paragraph>
      </Message>
    </Wrapper>
  );
};

export default Activity;
