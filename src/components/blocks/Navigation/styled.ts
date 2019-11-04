import styled from 'styled-components';
import { Wrapper } from '../../../util/layout';
import { LinkButton } from '../../general/Button';

export const NavigationWrapper = styled(Wrapper)`
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  padding-top: 5rem;
  padding-bottom: 5rem;
`

export const LoginButton = styled(LinkButton)`
  margin-left: auto;
`
