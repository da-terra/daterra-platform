import styled, { css } from "styled-components";
import { FontFamily, FontWeight } from "../../../data/style/variables";

export enum HeadingType {
  Primary,
  Secondary,
  Tertiary,
  Quaternary
}

export type HeadingProps = {
  type?: HeadingType;
  serif?: boolean;
  italic?: boolean;
};

const primary = css`
  font-size: 4.8rem;
  line-height: 5.8rem;
`;

const secondary = css`
  font-size: 2.5rem;
  line-height: 3.8rem;
`;

const tertiary = css`
  font-size: 2rem;
  line-height: 2.8rem;
`;

const quaternary = css`
  font-size: 1.6rem;
  line-height: 2rem;
`;

// Map to get the right styles for the right type
const styleMap = {
  [HeadingType.Primary]: primary,
  [HeadingType.Secondary]: secondary,
  [HeadingType.Tertiary]: tertiary,
  [HeadingType.Quaternary]: quaternary
};

const Heading = styled.h1<HeadingProps>`
  font-weight: ${FontWeight.BOLD}

  ${props => styleMap[props.type || HeadingType.Primary]}

  // Default customization
  font-family: ${props =>
    props.serif ? FontFamily.ROBOTO_SLAB : FontFamily.ROBOTO};

  font-style: ${props => (props.italic ? "italic" : "normal")};
`;

export default Heading;
