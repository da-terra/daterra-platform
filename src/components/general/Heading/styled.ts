import { css } from "styled-components";
import { Breakpoints } from "../../../data/style/variables";

export const primary = css`
  font-size: 6.4rem;
  line-height: 7.4rem;

  @media (max-width: ${Breakpoints.H500}) {
    font-size: 4.2rem;
    line-height: 6.4rem;
  }
`;

export const secondary = css`
  font-size: 3rem;
  line-height: 3.8rem;
`;

export const tertiary = css`
  font-size: 2rem;
  line-height: 2.8rem;
`;

export const quaternary = css`
  font-size: 1.6rem;
  line-height: 2rem;
`;
