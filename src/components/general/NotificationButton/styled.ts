import styled from "styled-components";
import { IUser } from "@data-science-platform/shared";
import Easings from "../../../data/style/easings";
import { LinkButton } from "../Button";
import Paragraph from "../Paragraph";

export { default as Icon } from "../Icon";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Button = styled(LinkButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
`;

export const NotificationsList = styled.div<{ show: boolean }>`
  position: absolute;
  top: calc(100% + 2rem);
  right: 0;
  transition: 0.3s all ${Easings.easeOutBack};
  transform: translateY(0);

  ${props =>
    !props.show &&
    `
    pointer-events: none;
    opacity: 0;
    transform: translateY(-2rem);
    transition: 0.3s all ${Easings.easeInQuad};
  `}
`;

export const Notification = styled.div<{ user: IUser; createdDate: string }>``;

export const NotificationGhost = styled(Paragraph)`
  box-shadow: ${props => props.theme.card.shadow};
  border-radius: ${props => props.theme.card.borderRadius}px;
  background: ${props => props.theme.card.background};
  min-width: 30rem;
  padding: 2rem;
`;
