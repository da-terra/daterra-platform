import React from "react";
import RoutePath from "../../data/RoutePath";
import StatusCode from "../../data/StatusCode";
import { FontWeight, Breakpoints } from "../../data/style/variables";
import MediaQuery from "../../components/util/MediaQuery";
import { LogoSize } from "../../components/general/Logo";
import { WrapperWidth } from "../../components/general/Wrapper";
import { HeadingType } from "../../components/general/Heading";
import {
  PageWithBackgroundColor,
  Circle,
  ContentWrapper,
  LogoWrapper,
  ErrorWrapper,
  Logo,
  Status,
  ErrorMessage,
  CtaButton
} from "./styled";
import { useHistory } from "react-router";

const errorMessages = {
  [StatusCode.NotFound]: "Whoops! We konden de pagina die je zoekt niet vinden."
};

type ErrorPageProps = {
  status: StatusCode;
};

const h750MediaQuery = `(min-width: ${Breakpoints.H500})`;

const ErrorPage: React.FC<ErrorPageProps> = ({ status }) => {
  const history = useHistory();

  const showGoBack = history.length > 1;

  const backButton = () => (
    <CtaButton inverted onClick={() => history.go(-1)}>
      Terug naar vorige pagina
    </CtaButton>
  );

  const homeButton = () => (
    <CtaButton inverted href={RoutePath.Home}>
      Naar homepage
    </CtaButton>
  );

  const message =
    errorMessages[status] || "Whoops! er ging iets niet helemaal goed.";

  return (
    <PageWithBackgroundColor>
      <Circle x={33} y={-45} radius={200} />

      <ContentWrapper width={WrapperWidth.Small}>
        <LogoWrapper>
          <MediaQuery
            mediaQuery={h750MediaQuery}
            fallback={() => <Logo size={LogoSize.Normal} showName />}
          >
            <Logo size={LogoSize.Large} showName />
          </MediaQuery>
        </LogoWrapper>

        <ErrorWrapper>
          <Status fontWeight={FontWeight.Bold} serif>
            {status}
          </Status>

          <ErrorMessage
            headingType={HeadingType.Secondary}
            fontWeight={FontWeight.Bold}
            serif
          >
            {message}
          </ErrorMessage>

          {showGoBack ? backButton() : homeButton()}
        </ErrorWrapper>
      </ContentWrapper>
    </PageWithBackgroundColor>
  );
};

export default ErrorPage;
