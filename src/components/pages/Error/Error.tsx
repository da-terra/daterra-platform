import React from "react";
import { useHistory } from "react-router";
import RoutePath from "../../../data/RoutePath";
import { Breakpoints, FontWeight } from "../../../data/style/variables";
import { HeadingType } from "../../general/Heading";
import Logo, { LogoSize } from "../../general/Logo";
import { WrapperWidth } from "../../general/Wrapper";
import Circle from "../../util/Circle";
import MediaQuery from "../../util/MediaQuery";
import {
  ButtonWrapper,
  Code,
  ContentWrapper,
  CtaButton,
  ErrorMessage,
  ErrorWrapper,
  LogoWrapper,
  PageWithBackgroundColor
} from "./styled";

type ErrorPageProps = {
  code?: string;
  message?: string;
};

const min500 = `(min-width: ${Breakpoints.H500})`;
const max500 = `(max-width: ${Breakpoints.H500})`;

const ErrorPage: React.FC<ErrorPageProps> = ({ code = "ERROR", message }) => {
  const history = useHistory();

  const showGoBack = history.length > 1;

  const backButton = () => (
    <CtaButton inverted onClick={() => history.go(-1)}>
      Terug naar vorige pagina
    </CtaButton>
  );

  return (
    <PageWithBackgroundColor>
      <Circle x={33} y={-45} radius={200} />

      <ContentWrapper width={WrapperWidth.Small}>
        <LogoWrapper>
          <MediaQuery mediaQuery={min500}>
            {() => <Logo size={LogoSize.Large} showName />}
          </MediaQuery>

          <MediaQuery mediaQuery={max500}>
            {() => <Logo size={LogoSize.Normal} showName />}
          </MediaQuery>
        </LogoWrapper>

        <ErrorWrapper>
          {code && (
            <Code
              dangerouslySetInnerHTML={{ __html: code.replace(/_/g, "_<wbr>") }}
              fontWeight={FontWeight.Black}
              serif
            />
          )}

          <ErrorMessage
            headingType={HeadingType.Secondary}
            fontWeight={FontWeight.Bold}
            serif
          >
            {message || "Whoops! er ging iets niet helemaal goed."}
          </ErrorMessage>

          <ButtonWrapper>
            {showGoBack && backButton()}

            <CtaButton inverted href={RoutePath.Home}>
              Naar homepage
            </CtaButton>
          </ButtonWrapper>
        </ErrorWrapper>
      </ContentWrapper>
    </PageWithBackgroundColor>
  );
};

export default ErrorPage;
