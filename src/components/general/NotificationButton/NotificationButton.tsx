import {
  INotification,
  NotificationState
} from "@data-science-platform/shared";
import React, { useCallback, useState } from "react";
import { FormattedMessage } from "react-intl";
import { FontColor, FontSize } from "../../../data/style/variables";
import Icon from "../Icon";
import {
  Button,
  Container,
  Notification,
  NotificationGhost,
  NotificationsList
} from "./styled";

type UserButtonProps = {
  className?: string;
  notifications: INotification[];
};

const NotificationButon: React.FC<UserButtonProps> = ({
  className,
  notifications
}) => {
  const [showNotificationsList, setShowNotificationsList] = useState(false);

  const toggleMenu = useCallback(
    () => setShowNotificationsList(!showNotificationsList),
    [setShowNotificationsList, showNotificationsList]
  );

  const hasUnreadNotifcations = notifications?.some(
    notification => notification.status === NotificationState.Read
  );

  const CurrentIcon = showNotificationsList
    ? Icon.Notifications
    : hasUnreadNotifcations
    ? Icon.NotificationsActive
    : Icon.NotificationsNone;

  return (
    <Container className={className}>
      <Button onClick={toggleMenu}>
        <CurrentIcon />
      </Button>

      <NotificationsList show={showNotificationsList}>
        {notifications.map(({ user, createdDate, message }) => (
          <Notification user={user} createdDate={createdDate}>
            {message}
          </Notification>
        ))}

        {notifications.length < 1 && (
          <NotificationGhost
            fontSize={FontSize.Small}
            fontColor={FontColor.Secondary}
            italic
          >
            <FormattedMessage id="NotificationButton_dropdownTitle" />
          </NotificationGhost>
        )}
      </NotificationsList>
    </Container>
  );
};

export default NotificationButon;
