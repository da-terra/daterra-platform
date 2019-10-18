import styled from "styled-components";
import Button from "../Button";
import { paragraphCss } from "../Paragraph";
import Avatar from "../Avatar";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const PartnerAvatar = styled(Avatar)`
  margin-right: 1.5rem;
  flex: 1 0 auto;
`;

export const PartnerLink: React.FC<any> = styled(Button)`
  ${paragraphCss}

  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const PartnerDetails = styled.div`
  width: calc(100% - (3.3rem + 1rem));
`;
