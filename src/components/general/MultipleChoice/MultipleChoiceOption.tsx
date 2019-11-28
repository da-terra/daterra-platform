import React, { Fragment, useState, useCallback } from "react";
import {
  Option,
  InfoWrapper,
  InfoToggleButton,
  InfoToggleIcon,
  OptionSelectButton,
  SelectButtonIcon
} from "./styled";

export type MultipleChoiceOptionProps = {
  _id: any;
  label: React.ReactNode;
  value: any;
  info: React.ReactNode;
  onSelect?: (value: any) => void;
};

const MultipleChoiceOption: React.FC<MultipleChoiceOptionProps> = ({
  label,
  value,
  info,
  onSelect
}) => {
  const [showInfo, setShowInfo] = useState<boolean>(false);

  const handleToggleInfo = useCallback(() => {
    setShowInfo(!showInfo);
  }, []);

  const handleSelect = useCallback(() => onSelect && onSelect(value), [
    onSelect
  ]);

  return (
    <Option>
      {label}

      {info && (
        <Fragment>
          <InfoWrapper show={showInfo}>info</InfoWrapper>

          <InfoToggleButton onClick={handleToggleInfo}>
            <InfoToggleIcon />
          </InfoToggleButton>
        </Fragment>
      )}

      <OptionSelectButton onClick={handleSelect}>
        <SelectButtonIcon />
      </OptionSelectButton>
    </Option>
  );
};

export default MultipleChoiceOption;
