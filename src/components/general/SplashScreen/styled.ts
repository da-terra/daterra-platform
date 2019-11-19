import styled, { keyframes } from 'styled-components';
import Logo from '../Logo';
import Easings from '../../../data/style/easings';

export { Circle } from "../../../util/layout";

export const Background = styled.div`
  background: ${props => props.theme.background.primary};
  color: ${props => props.theme.copy.primary};
  display: flex;
  height: 100vh;
  overflow: hidden;
  position: relative;
`

const fadeInOut = keyframes`
  0% {
    opacity: .3;
  }

  50% {
    opacity: .6;
  }

  100% {
    opacity: .3;
  }
`;


export const LogoWithAnimation = styled(Logo)`
  margin: auto;
  animation: ${fadeInOut} 1s ${Easings.easeInOutSine} infinite
`;
