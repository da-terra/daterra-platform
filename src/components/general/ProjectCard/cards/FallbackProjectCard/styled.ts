import styled from "styled-components";
import Card from "../../../../util/Card";
import Avatar from "../../../Avatar";

export const FallbackCardWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  min-height: 18rem;
  background: linear-gradient(
    135deg,
    ${props => props.theme.card.background},
    ${props => props.theme.card.backgroundAccent}
  );
`;

export const FallbackDetails = styled.div`
  display: flex;
  align-items: center;
`;

export const FallbackFooter = styled.div`
  margin-top: auto;
  display: flex;
`;

export const FallbackAvatar = styled(Avatar)`
  margin-right: 2rem;
`;

export const FallbackParagraph = styled.div<{ width: number; margin?: string }>`
  height: 1.7rem;
  opacity: 0.2;
  border-radius: 1rem;
  background: ${props => props.theme.copy.primary};
  width: ${props => props.width * 100}%;
  margin: ${props => props.margin || 0};
`;
