import React from "react";
import { InputWrapper, Label, InputElement, Tooltip } from "./styled";

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
    <InputWrapper className={className} hasError>
      <InputElement {...props} id={props.name} placeholder=" " />

      <Label htmlFor={props.name}>{label}</Label>

      {tooltip && <Tooltip icon={tooltip.icon}>{tooltip.message}</Tooltip>}
    </InputWrapper>
  );
};

export default Input;
