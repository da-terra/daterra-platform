import { useQuery } from "@apollo/react-hooks";
import {
  INotification,
  IOrganization,
  IUser
} from "@data-science-platform/shared";
import { loader } from "graphql.macro";
import React from "react";
import { useParams } from "react-router-dom";
import RoutePath from "../../../../data/RoutePath";
import { Card, LinkButton, Modal, Organization, StyledWrapper } from "./styled";

const organizationsQuery = loader("./organization.graphql");

type QueryResponse = {
  me: IUser;
  notifications: INotification[];
  organization: IOrganization;
};

const Organizations: React.FC = () => {
  const { id } = useParams();

  const { loading, data, error } = useQuery<QueryResponse>(organizationsQuery, {
    variables: { id }
  });

  if (error) {
    throw error;
  }

  if (loading || data == null) {
    return null;
  }

  return (
    <Modal closeHref={RoutePath.Cms.Organizations}>
      <StyledWrapper>
        <Card>
          <LinkButton href={RoutePath.Cms.Organizations}>
            Terug naar overzicht
          </LinkButton>

          <Organization {...data.organization} />
        </Card>
      </StyledWrapper>
    </Modal>
  );
};

export default Organizations;
