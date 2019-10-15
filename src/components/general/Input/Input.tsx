import React from "react";
import { Wrapper, Label, InputElement, Tooltip } from "./styled";

type InputProps = {
  label: string;
  name: string;
  type?: "text" | "number" | "email" | "password" | "search";
  className?: string;
  error?: {
    icon: any;
    message: string;
  };
};

const Input: React.FC<InputProps> = ({ className, error, label, ...props }) => {
  return (
    <Wrapper className={className} hasError>
      <InputElement {...props} id={props.name} placeholder=" " />

      <Label htmlFor={props.name}>{label}</Label>

      {error && <Tooltip icon={error.icon}>{error.message}</Tooltip>}
    </Wrapper>
  );
};

export default Input;
