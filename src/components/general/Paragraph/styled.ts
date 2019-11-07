import { css } from "styled-components";
import { FontWeight } from "../../../data/style/variables";

export const large = css`
  font-size: 2rem;
  line-height: 3.2rem;
  letter-spacing: 1.1px;
`;

export const normal = css`
  font-size: 1.8rem;
  line-height: 3rem;
`;

export const small = css`
  font-size: 1.6rem;
  line-height: 2rem;
`;

export const richText = css`
  a {
    color: currentColor;
    font-weight: ${FontWeight.Bold};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
