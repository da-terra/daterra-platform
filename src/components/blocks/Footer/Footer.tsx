import React from "react";
import styled from "styled-components";
import IBlock from "../../../types/IBlock";
import Logo from "../../general/Logo";
import Button from "../../general/Button";
import Paragraph, { ParagraphSize } from "../../general/Paragraph";
import { Wrapper } from "../../../util/layout";
import { FontFamily, FontWeight } from "../../../data/style/variables";
import RoutePath from "../../../data/RoutePath";

const FooterContainer = styled.div`
  border-top: 2px solid ${props => props.theme.background.primaryAccent};
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

  &:hover {
    text-decoration: underline;
  }
`;

const FooterNavigation = styled.div`
  margin-top: auto;
  margin-left: auto;
  font-family: ${FontFamily.Roboto};
  font-weight: ${FontWeight.Bold};
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
        <Logo>Studata</Logo>

        <FooterContent>
          <Paragraph as="address" paragraphSize={ParagraphSize.Small} italic>
            {address}
            {"\n"}
            {"\n"}
            <a href={`tel:${phone}`}>{phone}</a>
            {"\n"}
            <a href={`mailto:${email}`}>{email}</a>
          </Paragraph>

          <FooterNavigation>
            <FooterNavigationLink to={RoutePath.ForBusiness}>
              Voor Bedrijven
            </FooterNavigationLink>
            <FooterNavigationLink to={RoutePath.ForStudents}>
              Voor Studenten
            </FooterNavigationLink>
            <FooterNavigationLink to={RoutePath.ForExperts}>
              Voor Experts
            </FooterNavigationLink>
          </FooterNavigation>
        </FooterContent>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
