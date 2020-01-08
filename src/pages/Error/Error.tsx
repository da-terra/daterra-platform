import React from "react";
import { useHistory } from "react-router";
import { ApolloError } from "apollo-boost";
import RoutePath from "../../data/RoutePath";
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
  Status as Code,
  ErrorMessage,
  CtaButton
} from "./styled";

type ErrorPageProps = {
  code?: string;
  apolloError?: ApolloError;
};

const min500 = `(min-width: ${Breakpoints.H500})`;
const max500 = `(max-width: ${Breakpoints.H500})`;

const ErrorPage: React.FC<ErrorPageProps> = ({ code, apolloError }) => {
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
            <Code fontWeight={FontWeight.Bold} serif>
              {(apolloError && apolloError.name) || code}
            </Code>
          )}

          <ErrorMessage
            headingType={HeadingType.Secondary}
            fontWeight={FontWeight.Bold}
            serif
          >
            Whoops! er ging iets niet helemaal goed.
          </ErrorMessage>

          {showGoBack ? backButton() : homeButton()}
        </ErrorWrapper>
      </ContentWrapper>
    </PageWithBackgroundColor>
  );
};

export default ErrorPage;
