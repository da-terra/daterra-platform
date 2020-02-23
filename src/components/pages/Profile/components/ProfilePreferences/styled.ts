import styled from "styled-components";
import Heading from "../../../../../components/general/Heading";
import Paragraph, { paragraphCss } from "../../../../general/Paragraph";
import { FontWeight } from "../../../../../data/style/variables";

export const Wrapper = styled.div`
  padding: 2rem;
  border-radius: 1rem;
  background: ${props => props.theme.card.background};
  box-shadow: ${props => props.theme.card.shadow};
`;

export const StyledHeading = styled(Heading)`
  position: absolute;
  top: -2rem;
  left: 0;
  transform: translateY(-100%);
`;

export const PreferencesGroup = styled.fieldset`
  border: none;
  display: block;
  padding: 0;

  &:not(:first-child) {
    margin-top: 2rem;
  }
`;

export const PreferencesLabel = styled(Paragraph)`
  display: inline-block;
  margin-right: 4rem;
  min-width: 30%;
`;

PreferencesLabel.defaultProps = {
  fontWeight: FontWeight.Bold,
  serif: true
};

export const PreferencesSelect = styled.select`
  ${paragraphCss}

  padding: 2rem;
  border-radius: 1rem;

  color: ${props => props.theme.input.copyColor};
  background: ${props => props.theme.input.backgroundColor};
  border: 1px solid ${props => props.theme.input.borderColor};
`;

export const Option = styled.option``;
