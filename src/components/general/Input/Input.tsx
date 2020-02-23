import React, { useState, useCallback, ChangeEvent, useEffect } from "react";
import InputType from "./data/InputType";
import { IconTooltipProps } from "../IconTooltip/IconTooltip";
import { InputWrapper, Label, InputElement, Tooltip } from "./styled";

type InputProps = {
  className?: string;
  defaultValue?: string;
  label: React.ReactNode;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: InputType;

  // Custom input behavior
  tooltip?: IconTooltipProps;
  formatter?: (value: string, event: ChangeEvent<HTMLInputElement>) => string;
  validator?: (
    value: string
  ) => ({ preview?: boolean } & IconTooltipProps) | null;
};

const Input: React.FC<InputProps> = ({
  className,
  defaultValue = "",
  type = InputType.Text,

  onChange,
  label,
  formatter,
  validator,

  ...props
}) => {
  const [value, setValue] = useState(defaultValue);

  const [tooltip, setTooltip] = useState();
  const [changed, setChanged] = useState(false);

  /** Run validator on mount to show the validator preview if requested */
  useEffect(() => {
    if (!validator) {
      return;
    }

    setTooltip(validator(defaultValue));
  }, [setTooltip, defaultValue, validator]);

  const changeCallback = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = formatter
        ? formatter(event.currentTarget.value, event)
        : event.currentTarget.value;

      setValue(newValue);

      // Update changed field
      !changed && setChanged(true);

      // Validate input
      validator && setTooltip(validator(newValue));

      // Forward change event
      onChange && onChange(event);
    },
    [formatter, validator, changed, onChange]
  );

  return (
    <InputWrapper className={className} hasError>
      <InputElement
        {...props}
        placeholder=" "
        id={props.name}
        value={value}
        type={type}
        onChange={changeCallback}
      />

      <Label htmlFor={props.name}>{label}</Label>

      {tooltip && (
        <Tooltip icon={tooltip.icon} error={changed}>
          {tooltip.children}
        </Tooltip>
      )}
    </InputWrapper>
  );
};

export default Input;
