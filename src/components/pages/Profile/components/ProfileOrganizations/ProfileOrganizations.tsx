import { useQuery } from "@apollo/react-hooks";
import { IUser } from "@data-science-platform/shared";
import { loader } from "graphql.macro";
import React from "react";
import { HeadingType } from "../../../../general/Heading";
import Organization from "../../../../general/Organization";
import { List, ListItem, StyledHeading, Wrapper } from "./styled";

const profileOrganizationQuery = loader("./profileOrganizations.graphql");

type QueryResponse = {
  me: IUser;
};

type ProfileOrganizationProps = {
  className?: string;
};

const ProfileOrganization: React.FC<ProfileOrganizationProps> = ({
  className
}) => {
  const { loading, data, error } = useQuery<QueryResponse>(
    profileOrganizationQuery
  );

  if (error) {
    throw error;
  }

  if (loading || data == null) {
    return null;
  }

  const { organizations } = data.me;

  return (
    <Wrapper className={className}>
      <StyledHeading headingType={HeadingType.Tertiary} serif>
        Bedrijven
      </StyledHeading>

      <List>
        {organizations.map(organization => (
          <ListItem key={organization.id}>
            <Organization {...organization} />
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};

export default ProfileOrganization;
