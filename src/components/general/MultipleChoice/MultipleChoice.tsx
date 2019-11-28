import React, { Fragment, useState } from "react";
import { MultipleChoiceOptionProps } from "./MultipleChoiceOption";
import { OptionList, OptionItem, Option } from "./styled";

type MultipleChoiceProps = {
  name: string;
  options: MultipleChoiceOptionProps[];
};

const MultipleChoice: React.FC<MultipleChoiceProps> = ({ name, options }) => {
  const [value, setValue] = useState<any>();

  return (
    <Fragment>
      <OptionList>
        {options.map(option => (
          <OptionItem key={option.value}>
            <Option {...option} onSelect={setValue} />
          </OptionItem>
        ))}
      </OptionList>

      <input type="hidden" name={name} value={value} />
    </Fragment>
  );
};

export default MultipleChoice;
