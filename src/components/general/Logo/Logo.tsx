import styled from "styled-components";
import { FontFamily, FontWeight } from "../../../data/style/variables";

const Logo = styled.h1`
  color: ${props => props.theme.color.darkAccent};
  font-family: ${FontFamily.ROBOTO_SLAB};
  font-weight: ${FontWeight.BOLD};
  font-size: 3.6rem;
  margin: 0;
`;

export default Logo;
