import { useQuery } from "@apollo/react-hooks";
import { IUser, getFlaggedBits, Role } from "@data-science-platform/shared";
import { loader } from "graphql.macro";
import React, { Fragment } from "react";
import { SplashScreen } from "../../public/Home/styled";

const settingsQuery = loader("./settings.graphql");

type QueryResponse = {
  me: IUser;
};

const Settings: React.FC = () => {
  const { loading, data } = useQuery<QueryResponse>(settingsQuery);

  if (loading || data == null) {
    return <SplashScreen />;
  }

  const { me } = data;

  const roles = getFlaggedBits(Role, me.role);

  return (
    <Fragment>
      displayName: {me.displayName}
      <br />
      Volledige naam: {me.name.givenName} {me.name.middleName}{" "}
      {me.name.familyName}
      <br />
      Emails: {me.emails.map(email => email.value).join(", ")}
      <br />
      Roles: {roles.join(", ")}
      <br />
      Organisaties: {me.organizations.map(org => org.name).join(", ")}
      <br />
      User activities: {me.activity}
    </Fragment>
  );
};

export default Settings;
