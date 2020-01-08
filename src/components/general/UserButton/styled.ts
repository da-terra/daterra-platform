import styled from "styled-components";
import Avatar from "../Avatar";
import { LinkButton } from "../Button";
import Icon from "../Icon";
import Easings from "../../../data/style/easings";
import { Breakpoints } from "../../../data/style/variables";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Button = styled(LinkButton)`
  display: flex;
  align-items: center;
  height: 5rem;
  padding-left: 2.5rem;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: ${Breakpoints.H750}) {
    padding-left: 0.5rem;
  }
`;

export const DropDownIcon = styled(Icon.ArrowDropDown)<{ invert: boolean }>`
  transition: 0.5s all ${Easings.easeOutBack};
  transform: rotate(${props => (props.invert ? -180 : 0)}deg);
  margin: 0 2.5rem 0 1rem;

  @media (max-width: ${Breakpoints.H750}) {
    margin: 0 0 0 0.5rem;
  }
`;

export const UserAvatar = styled(Avatar)`
  @media (max-width: ${Breakpoints.H750}) {
    display: none;
  }
`;

export const Menu = styled.div<{ show: boolean }>`
  position: absolute;
  z-index: 2;
  top: calc(100% + 2rem);
  right: 0;
  min-width: 25rem;
  padding: 2rem;
  background: ${props => props.theme.card.background};
  border-radius: ${props => props.theme.card.borderRadius}px;
  box-shadow: ${props => props.theme.card.shadow};
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

export const MenuLinkDivider = styled.hr`
  margin: 2rem 0;
  border: 0;
  border-bottom: 2px solid ${props => props.theme.copy.tertiary};
`;

export const MenuLink = styled(LinkButton)`
  display: block;

  &:hover {
    text-decoration: underline;
  }

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;
