import React, {
  Fragment,
  useState,
  useCallback,
  useRef,
  useEffect
} from "react";
import { OptionList, OptionItem, Option } from "./styled";

type MultipleChoiceProps = {
  name: string;
  options: {
    label: React.ReactNode;
    value: any;
    info: React.ReactNode;
  }[];
  onClick?: (
    value: any,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

const MultipleChoice: React.FC<MultipleChoiceProps> = ({
  name,
  options,
  onClick
}) => {
  const [value, setValue] = useState<any>();
  const selectTimeout = useRef(0);

  const handleSelect = useCallback(
    (value, event) => {
      setValue(value);

      // Call onClick after callstack is clear
      clearTimeout(selectTimeout.current);
      selectTimeout.current = setTimeout(
        () => onClick && onClick(value, event),
        0
      );
    },
    [setValue, onClick]
  );

  useEffect(() => () => {
    clearTimeout(selectTimeout.current);
  });

  return (
    <Fragment>
      <OptionList>
        {options.map(option => (
          <OptionItem key={option.value}>
            <Option {...option} onSelect={handleSelect} />
          </OptionItem>
        ))}
      </OptionList>

      <input type="hidden" name={name} value={value} />
    </Fragment>
  );
};

export default MultipleChoice;
