import React from "react";
import { DefaultTheme, withTheme } from "styled-components";
import {
  FallbackAvatar,
  FallbackCardWrapper,
  FallbackDetails,
  FallbackFooter,
  FallbackParagraph
} from "./styled";

type FallbackProjectCard = {
  className?: string;
  theme?: DefaultTheme;
};

const FallbackProjectCard: React.FC<FallbackProjectCard> = ({
  theme,
  className
}) => (
  <FallbackCardWrapper className={className}>
    <FallbackDetails>
      <FallbackAvatar fallbackColor={theme?.copy.secondary!} />
      <FallbackParagraph width={0.4} />
    </FallbackDetails>

    <FallbackParagraph width={0.7} margin="2rem 0 0" />
    <FallbackParagraph width={0.9} margin="1rem 0 4rem" />

    <FallbackFooter>
      <FallbackParagraph width={0.3} margin="0 auto 0 0" />
      <FallbackParagraph width={0.2} />
    </FallbackFooter>
  </FallbackCardWrapper>
);

export default withTheme(FallbackProjectCard);
