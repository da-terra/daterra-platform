import styled from "styled-components";
import Button from "../Button";
import { FontWeight, FontFamily } from "../../../data/style/variables";

const NavigationButton = styled(Button)`
  font-weight: ${FontWeight.BOLD};
  font-family: ${FontFamily.ROBOTO_SLAB};
  color: ${props => props.theme.color.darkAccent} !important;
  padding: 0.6rem 0 !important;
  display: inline-block !important;
  white-space: nowrap;

  &:hover {
    color: ${props => props.theme.color.foreground} !important;
  }
`;

export default NavigationButton;
