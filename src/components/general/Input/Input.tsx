import React from "react";
import { Wrapper, Label, InputElement, Tooltip } from "./styled";

type InputProps = {
  label: string;
  name: string;
  type?: "text" | "number" | "email" | "password" | "search";
  className?: string;
  tooltip?: {
    icon: any;
    message: string;
  };
};

const Input: React.FC<InputProps> = ({
  className,
  tooltip,
  label,
  ...props
}) => {
  return (
    <Wrapper className={className} hasError>
      <InputElement {...props} id={props.name} placeholder=" " />

      <Label htmlFor={props.name}>{label}</Label>

      {tooltip && <Tooltip icon={tooltip.icon}>{tooltip.message}</Tooltip>}
    </Wrapper>
  );
};

export default Input;
