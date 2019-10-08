import React from "react";
import styled from "styled-components";
import IBlock from "../../../data/type/IBlock";
import Logo from "../../general/Logo";
import Button from "../../general/Button";
import Paragraph, { ParagraphType } from "../../general/Paragraph";
import { Wrapper } from "../../../util/layout";
import { FontFamily, FontWeight } from "../../../data/style/variables";

const FooterContainer = styled.div`
  border-top: 2px solid ${props => props.theme.color.darkAccent};
`;

const FooterWrapper = styled(Wrapper)`
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

const FooterContent = styled.div`
  display: flex;
  margin-top: 5rem;
`;

const FooterNavigationLink = styled(Button)`
  text-decoration: none;
  display: block;
  text-align: right;
  font-size: 1.8rem;
  line-height: 3.3rem;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterNavigation = styled.div`
  margin-top: auto;
  margin-left: auto;
  font-family: ${FontFamily.ROBOTO};
  font-weight: ${FontWeight.BOLD};
`;

type FooterProps = IBlock & {
  address: string;
  phone: string;
  email: string;
};

const Footer: React.FC<FooterProps> = ({
  className,
  address,
  phone,
  email
}) => {
  return (
    <FooterContainer className={className}>
      <FooterWrapper>
        <Logo>DaTerra</Logo>

        <FooterContent>
          <Paragraph as="address" type={ParagraphType.Tertiary} italic>
            {address}
            {"\n"}
            {"\n"}
            <a href={`tel:${phone}`}>{phone}</a>
            {"\n"}
            <a href={`mailto:${email}`}>{email}</a>
          </Paragraph>

          <FooterNavigation>
            <FooterNavigationLink to="/business">
              Voor Business
            </FooterNavigationLink>
            <FooterNavigationLink to="/students">
              Voor Students
            </FooterNavigationLink>
            <FooterNavigationLink to="/data-scientists">
              Voor Experts
            </FooterNavigationLink>
          </FooterNavigation>
        </FooterContent>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
