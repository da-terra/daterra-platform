import React from "react";
import styled from "styled-components";
import Avatar from "../Avatar";
import { LinkButton } from "../Button";
import Icon from "../Icon";
import Easings from "../../../data/style/easings";
import { Breakpoints } from "../../../data/style/variables";
import { CardMenu } from "../../CardMenu";
export { CardMenuDivider, CardMenuLink } from "../../CardMenu";

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

export const StyledCardMenu = styled(CardMenu)<{ show: boolean }>`
  position: absolute;
  top: calc(100% + 2rem);
  right: 0;
  z-index: 2;
  transition: 0.1s all ${Easings.easeOutBack};

  ${props =>
    !props.show &&
    `
    pointer-events: none;
    opacity: 0;
    transform: translateY(-2rem);
    transition: 0.2s all ${Easings.easeOutQuad};
  `}
`;

export const DropDownIcon = styled(({ invert: boolean, ...props }) => (
  <Icon.ArrowDropDown {...props} />
))`
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
