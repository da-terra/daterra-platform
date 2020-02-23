import styled from "styled-components";

export const Backdrop = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  z-index: 3;
  background: rgba(0, 0, 0, 0.5);
`;
