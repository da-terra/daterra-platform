import React from "react";
import {
  Background,
  Popup,
  Disclaimer,
  ButtonWrapper,
  SolidAction,
  LinkAction
} from "./styled";

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
      <Popup>
        <Disclaimer>
          We proberen inzichten te krijgen voor het gebruik van onze website om
          onze diensten te verbeteren, daarvoor gebruiken wij cookies. Wil jij
          ons helpen onze site te verbeteren?
        </Disclaimer>

        <ButtonWrapper>
          <SolidAction onClick={onConsent}>Toestaan</SolidAction>

          <LinkAction onClick={onDissent} serif>
            Weigeren
          </LinkAction>
        </ButtonWrapper>
      </Popup>
    </Background>
  );
};

export default CookieConsent;
