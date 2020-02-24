import { useQuery } from "@apollo/react-hooks";
import { getFlaggedBits, IUser, Role } from "@data-science-platform/shared";
import { loader } from "graphql.macro";
import React from "react";
import { useParams } from "react-router-dom";
import RoutePath from "../../../data/RoutePath";
import { FontWeight } from "../../../data/style/variables";
import Modal from "../../general/Modal";
import Card from "../../util/Card";
import {
  Group,
  Label,
  RoleTagWrapper,
  StyledRoleTag,
  StyledWrapper,
  Value
} from "./styled";

const userQuery = loader("./user.graphql");

type QueryResponse = {
  user: Partial<IUser>;
};

const labelProps = {
  fontWeight: FontWeight.Bold
};

const valueProps = {};

const User = () => {
  const params = useParams();

  const { loading, data, error } = useQuery<QueryResponse>(userQuery, {
    variables: params
  });

  if (error) {
    throw error;
  }

  if (loading || data == null) {
    return null;
  }

  console.log(data);

  const roles = getFlaggedBits(Role as any, data.user.role!).map(role => (
    <StyledRoleTag role={role} key={role} />
  ));

  return (
    <Modal closeHref={RoutePath.Cms.Users}>
      <StyledWrapper>
        <Card>
          <Group>
            <Label {...labelProps}>Display name</Label>
            <Value {...valueProps}>{data.user.displayName}</Value>
          </Group>

          <Group>
            <Label {...labelProps}>Full name</Label>
            <Value {...valueProps}>
              {data.user.name?.givenName} {data.user.name?.middleName}{" "}
              {data.user.name?.familyName}
            </Value>
          </Group>

          <Group>
            <Label {...labelProps}>Emails</Label>
            <Value {...valueProps}>
              {data.user.emails?.map(email => email.value)}
            </Value>
          </Group>

          <Group>
            <Label {...labelProps}>Authentication provider</Label>
            <Value {...valueProps}>{data.user.provider}</Value>
          </Group>

          <Group>
            <Label {...labelProps}>Role</Label>
            <Value {...valueProps}>
              <RoleTagWrapper>{roles}</RoleTagWrapper>
            </Value>
          </Group>
        </Card>
      </StyledWrapper>
    </Modal>
  );
};

export default User;
