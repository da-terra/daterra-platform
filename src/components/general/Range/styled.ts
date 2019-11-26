import styled from "styled-components";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import Easings from "../../../data/style/easings";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Value = styled(Heading)`
  margin-left: auto;
  margin-bottom: 2.4rem;
`;

export const Slider = styled.div`
  position: relative;
  height: 1.5rem;
  background: ${props => props.theme.background.accent};
  border-radius: 1.5rem;
  cursor: pointer;
`;

export const Thumb = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 1.5rem;
  height: calc(100% + 2rem);
  border-radius: 1.5rem;
  background: ${props => props.theme.copy.primary};
  box-shadow: ${props => props.theme.button.solid.shadow}
  transition: left .1s ${Easings.easeOutExpo};
  cursor: pointer;
  border: none;
  outline: none;
`;

export const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3.2rem;
`;

export const Label = Paragraph;
