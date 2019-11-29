import React, { Fragment, useState } from "react";
import { OptionList, OptionItem, Option } from "./styled";

type MultipleChoiceProps = {
  name: string;
  options: {
    label: React.ReactNode;
    value: any;
    info: React.ReactNode;
  }[];
};

const MultipleChoice: React.FC<MultipleChoiceProps> = ({ name, options }) => {
  const [value, setValue] = useState<any>();

  return (
    <Fragment>
      <OptionList>
        {options.map(option => (
          <OptionItem key={option.value}>
            <Option
              {...option}
              onSelect={value => {
                setValue(value);
                console.log("haio");
              }}
            />
          </OptionItem>
        ))}
      </OptionList>

      <input type="hidden" name={name} value={value} />
    </Fragment>
  );
};

export default MultipleChoice;
