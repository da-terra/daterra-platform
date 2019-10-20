import styled from "styled-components";
import Button from "../Button";
import { FontWeight, FontFamily } from "../../../data/style/variables";

const NavigationButton = styled(Button)`
  font-weight: ${FontWeight.Bold};
  font-family: ${FontFamily.RobotoSlab};
  color: ${props => props.theme.copy.primaryAccent} !important;
  padding: 0.6rem 0 !important;
  display: inline-block !important;
  white-space: nowrap;

  &:hover {
    color: ${props => props.theme.copy.primary} !important;
  }
`;

export default NavigationButton;
