import React, { Fragment, useState, useCallback } from "react";
import {
  Wrapper,
  InfoWrapper,
  InfoToggleButton,
  InfoToggleIcon,
  OptionSelectButton,
  SelectButtonIcon
} from "./styled";

export type OptionProps = {
  label: React.ReactNode;
  value: any;
  info: React.ReactNode;
  onSelect?: (value: any) => void;
};

const Option: React.FC<OptionProps> = ({ label, value, info, onSelect }) => {
  const [showInfo, setShowInfo] = useState<boolean>(false);

  const handleToggleInfo = useCallback(() => {
    setShowInfo(!showInfo);
  }, [setShowInfo, showInfo]);

  const handleSelect = useCallback(() => {
    console.log(onSelect, value);
    onSelect && onSelect(value);
  }, [onSelect, value]);

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Option;
