import React from "react";
import { WrapperWidth } from "../../../general/Wrapper";
import {
  Background,
  Popup,
  Disclaimer,
  ButtonWrapper,
  SolidAction,
  LinkAction
} from "./styled";
import { FontWeight } from "../../../../data/style/variables";

type CookieConsentProps = {
  onConsent: () => void;
  onDissent: () => void;
};

const CookieConsent: React.FC<CookieConsentProps> = ({
  onConsent,
  onDissent
}) => {
  return (
    <Background>
      <Popup width={WrapperWidth.Smaller}>
        <Disclaimer>
          We proberen inzichten te krijgen over het gebruik van onze website om
          onze diensten te verbeteren, daarvoor gebruiken wij cookies. Wil jij
          ons helpen onze site te verbeteren?
        </Disclaimer>

        <ButtonWrapper>
          <SolidAction onClick={onConsent}>Toestaan</SolidAction>

          <LinkAction onClick={onDissent} fontWeight={FontWeight.Bold} serif>
            Weigeren
          </LinkAction>
        </ButtonWrapper>
      </Popup>
    </Background>
  );
};

export default CookieConsent;
