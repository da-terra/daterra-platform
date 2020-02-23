import React, { useCallback, useState } from "react";
import { FontColor, FontSize } from "../../../../data/style/variables";
import Icon from "../../Icon";
import Paragraph from "../../Paragraph";
import {
  ButtonWrapper,
  InfoCard,
  InfoWrapper,
  OptionButton,
  OptionWrapper
} from "./styled";

export type OptionProps = {
  label: React.ReactNode;
  value: any;
  info?: React.ReactNode;
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
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
      onSelect && onSelect(value, event),
    [onSelect, value]
  );

  return (
    <OptionWrapper>
      <InfoCard>
        <Paragraph>{label}</Paragraph>

        {info && (
          <InfoWrapper
            fontColor={FontColor.Secondary}
            fontSize={FontSize.Small}
            visible={isInfoVisible}
          >
            {info}
          </InfoWrapper>
        )}
      </InfoCard>
      <ButtonWrapper>
        {info && (
          <OptionButton
            onClick={handleToggleInfo}
            active={isInfoVisible}
            inverted
          >
            <Icon.Info />
          </OptionButton>
        )}

        <OptionButton onClick={handleSelect}>
          <Icon.Forward />
        </OptionButton>
      </ButtonWrapper>
    </OptionWrapper>
  );
};

export default Option;
