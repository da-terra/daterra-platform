import { createPath, IOrganization } from "@data-science-platform/shared";
import React from "react";
import { useLocation } from "react-router-dom";
import RoutePath from "../../../data/RoutePath";
import { FontWeight } from "../../../data/style/variables";
import Button from "../Button";
import Paragraph from "../Paragraph";
import { List, ListItem, StyledAvatar, Top, Wrapper } from "./styled";

type OrganizationProps = IOrganization & {
  className?: string;
};

const Organization: React.FC<OrganizationProps> = ({
  id,
  name,
  image,
  locations
}) => {
  const location = useLocation();
  const path = createPath(RoutePath.Organization, { id: id! });

  const isDetailPage = path === location.pathname;

  const organizationName = (
    <Paragraph fontWeight={FontWeight.Bold} serif>
      {name}
    </Paragraph>
  );

  return (
    <Wrapper>
      <Top>
        <StyledAvatar {...image} />

        {isDetailPage ? (
          organizationName
        ) : (
          <Button href={path}>{organizationName}</Button>
        )}
      </Top>

      {locations && (
        <List>
          {locations.map(location => (
            <ListItem key={location.id}>
              <Paragraph>
                {location.address},{location.city} - {location.country}
              </Paragraph>
            </ListItem>
          ))}
        </List>
      )}
    </Wrapper>
  );
};
export default Organization;
