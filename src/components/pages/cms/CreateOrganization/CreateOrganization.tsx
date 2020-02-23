import React from "react";
import RoutePath from "../../../../data/RoutePath";
import { StyledWrapper } from "./styled";
import Modal from "../../../general/Modal";
import { Card } from "../../../util/Card/styled";
import { LinkButton } from "../../../general/Button";

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
