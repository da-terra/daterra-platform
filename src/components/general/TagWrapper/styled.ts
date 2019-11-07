import styled from "styled-components";
import Paragraph from "../Paragraph";
import Wrapper from "../Wrapper";

export { default as Wrapper } from "../Wrapper";

export const HeadingWrapper = styled(Wrapper)`
  padding-top: 10.2rem;
  padding-bottom: 5.2rem;
`;

export const Content = styled.div`
  position: relative;
  padding-bottom: 10.2rem;
`;

export const Tag = styled(Paragraph)`
  position: absolute;
  text-transform: uppercase;
`;
