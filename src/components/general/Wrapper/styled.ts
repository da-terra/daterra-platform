import styled, { css } from "styled-components";
import { Breakpoints } from "../../../data/style/variables";

const wrapperCss = css`
  position: relative;
  width: 100%;
  padding: 0 6rem;
  margin: 0 auto;

  @media (max-width: ${Breakpoints.H750}) {
    padding: 0 3rem;
  }

  @media (max-width: ${Breakpoints.H500}) {
    padding: 0 2rem;
  }
`;

export const NormalWrapper = styled.div`
  ${wrapperCss}
  max-width: 1500px;
`;

export const SmallWrapper = styled.div`
  ${wrapperCss}
  max-width: 1200px;
`;

export const SmallerWrapper = styled.div`
  ${wrapperCss}
  max-width: 900px;
`;
