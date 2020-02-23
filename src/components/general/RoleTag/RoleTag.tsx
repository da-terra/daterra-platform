import { Role } from "@data-science-platform/shared";
import React from "react";
import { FormattedMessage } from "react-intl";
import { FontSize, FontWeight } from "../../../data/style/variables";
import { Tag } from "./styled";

export type RoleTagProps = {
  role: Role;
};

const paragraphProps = {
  fontWeight: FontWeight.Bold,
  fontSize: FontSize.Small,
  italic: true
};

const RoleTag: React.FC<RoleTagProps> = props => (
  <Tag {...props} {...paragraphProps} as="span">
    <FormattedMessage id="RoleTag_role" values={{ role: props.role }} />
  </Tag>
);

export default RoleTag;
