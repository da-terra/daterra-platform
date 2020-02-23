import React from "react";
import RoutePath from "../../../../data/RoutePath";
import { Modal, StyledWrapper, Card, LinkButton } from "./styled";

type QueryResponse = {};

const CreateOrganization: React.FC = () => {
  return (
    <Modal closeHref={RoutePath.Cms.Organizations}>
      <StyledWrapper>
        <Card>
          <LinkButton href={RoutePath.Cms.Organizations}>
            Terug naar overzicht
          </LinkButton>
        </Card>
      </StyledWrapper>
    </Modal>
  );
};

export default CreateOrganization;
