import { useQuery } from "@apollo/react-hooks";
import { INotification, IUser } from "@data-science-platform/shared";
import { loader } from "graphql.macro";
import React, { Fragment, Suspense, useCallback, useState } from "react";
import { FormattedMessage } from "react-intl";
import { Redirect, Route, Switch, useLocation } from "react-router";
import RoutePath from "../../../data/RoutePath";
import { FontColor, FontWeight } from "../../../data/style/variables";
import Header from "../../blocks/Header";
import { CardMenuLink, CardMenuDivider, CardMenu } from "../../CardMenu";
import SplashScreen from "../../general/SplashScreen";
import Circle from "../../util/Circle";
import {
  PageWrapper,
  Sidebar,
  StyledProfileDetails,
  SectionWrapper,
  DeleteAccountModal
} from "./styled";

const ProfileActivity = React.lazy(() =>
  import("./components/ProfileActivity")
);
const ProfileOrganizations = React.lazy(() =>
  import("./components/ProfileOrganizations")
);

const ProfilePreferences = React.lazy(() =>
  import("./components/ProfilePreferences")
);

const profileQuery = loader("./profile.graphql");

type QueryResponse = {
  me: IUser;
  notifications?: INotification[];
};

const ProfileMenuLink: React.FC<{ href: string; match?: string[] }> = ({
  match,
  ...props
}) => {
  const location = useLocation();
  const isActive =
    match?.includes(location.pathname) || location.pathname === props.href;

  return (
    <CardMenuLink
      {...props}
      fontWeight={isActive ? FontWeight.Bold : FontWeight.Regular}
    >
      {props.children}
    </CardMenuLink>
  );
};

const Profile: React.FC = () => {
  const [showDeleteAccountModal, setShowDeleteAccountModal] = useState(false);

  const toggleShowAccount = useCallback(() => {
    setShowDeleteAccountModal(!showDeleteAccountModal);
  }, [setShowDeleteAccountModal, showDeleteAccountModal]);

  const { loading, data, error } = useQuery<QueryResponse>(profileQuery);

  if (error) {
    throw error;
  }

  if (loading || data == null) {
    return <SplashScreen />;
  }

  return (
    <Fragment>
      <Circle x={20} y={-30} />

      <Header me={data?.me} notifications={data?.notifications || []} />

      <PageWrapper>
        <Sidebar>
          <StyledProfileDetails {...data.me} />

          <CardMenu>
            <ProfileMenuLink
              href={RoutePath.ProfileActivities}
              match={[RoutePath.Profile, RoutePath.ProfileActivities]}
            >
              <FormattedMessage id="Profile_activityHistory" />
            </ProfileMenuLink>

            <ProfileMenuLink href={RoutePath.ProfileOrganizations}>
              <FormattedMessage id="Profile_organizations" />
            </ProfileMenuLink>

            <ProfileMenuLink href={RoutePath.ProfilePreference}>
              <FormattedMessage id="Profile_preferences" />
            </ProfileMenuLink>

            <CardMenuDivider />

            <CardMenuLink
              onClick={toggleShowAccount}
              fontWeight={FontWeight.Bold}
              fontColor={FontColor.Error}
            >
              <FormattedMessage id="Profile_deleteAccount" />
            </CardMenuLink>
          </CardMenu>
        </Sidebar>

        <SectionWrapper>
          <Suspense fallback={null}>
            <Switch>
              <Route
                path={RoutePath.ProfileActivities}
                component={ProfileActivity}
              />

              <Route
                path={RoutePath.ProfileOrganizations}
                component={ProfileOrganizations}
              />

              <Route
                path={RoutePath.ProfilePreference}
                component={ProfilePreferences}
              />

              <Redirect to={RoutePath.ProfileActivities} />
            </Switch>
          </Suspense>
        </SectionWrapper>
      </PageWrapper>

      {showDeleteAccountModal && (
        <DeleteAccountModal setShow={setShowDeleteAccountModal} />
      )}
    </Fragment>
  );
};

export default Profile;
