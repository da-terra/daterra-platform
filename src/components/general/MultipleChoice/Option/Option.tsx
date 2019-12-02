import React, { useState, useCallback } from "react";
import { FontColor, FontSize } from "../../../../data/style/variables";
import {
  Wrapper,
  Label,
  InfoWrapper,
  Line,
  ButtonWrapper,
  OptionButton,
  Icon
} from "./styled";

export type OptionProps = {
  label: React.ReactNode;
  value: any;
  info: React.ReactNode;
  onSelect?: (
    value: any,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

const Option: React.FC<OptionProps> = ({ label, value, info, onSelect }) => {
  const [isInfoVisible, setShowInfo] = useState<boolean>(false);

  const handleToggleInfo = useCallback(() => {
    setShowInfo(!isInfoVisible);
  }, [setShowInfo, isInfoVisible]);

  const handleSelect = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      console.log(onSelect, value);
      onSelect && onSelect(value, event);
    },
    [onSelect, value]
  );

  return (
    <Wrapper>
      <Label serif>{label}</Label>

      {info && (
        <InfoWrapper
          fontColor={FontColor.Secondary}
          fontSize={FontSize.Small}
          isVisible={isInfoVisible}
        >
          {info}
        </InfoWrapper>
      )}

      <Line />

      <ButtonWrapper>
        {info && (
          <OptionButton onClick={handleToggleInfo} active={isInfoVisible}>
            <Icon.Info />
          </OptionButton>
        )}

        <OptionButton onClick={handleSelect} inverted>
          <Icon.Forward />
        </OptionButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Option;
