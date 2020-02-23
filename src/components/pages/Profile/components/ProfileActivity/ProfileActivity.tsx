import { useQuery } from "@apollo/react-hooks";
import { IUser } from "@data-science-platform/shared";
import { loader } from "graphql.macro";
import React from "react";
import Activity from "../../../../general/Activity";
import { HeadingType } from "../../../../general/Heading";
import { List, ListItem, StyledHeading, Wrapper } from "./styled";

const profileActivityQuery = loader("./profileActivity.graphql");

type QueryResponse = {
  me: IUser;
};

type ProfileActivityProps = {
  className?: string;
};

const ProfileActivity: React.FC<ProfileActivityProps> = ({ className }) => {
  const { loading, data, error } = useQuery<QueryResponse>(
    profileActivityQuery
  );

  if (error) {
    throw error;
  }

  if (loading || data == null) {
    return null;
  }

  const { activities } = data.me;

  return (
    <Wrapper className={className}>
      <StyledHeading headingType={HeadingType.Tertiary} serif>
        Geschiedenis
      </StyledHeading>

      <List>
        {activities.map(activity => (
          <ListItem key={activity.id}>
            <Activity activity={activity} />
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};

export default ProfileActivity;
