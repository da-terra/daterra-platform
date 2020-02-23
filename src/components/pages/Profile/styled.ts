import styled from "styled-components";
import Wrapper from "../../../components/general/Wrapper";
import ProfileDetails from "../../general/ProfileDetails";
import { Breakpoints } from "../../../data/style/variables";

export const PageWrapper = styled(Wrapper)`
  display: flex;
  margin-top: 10rem;

  @media (max-width: ${Breakpoints.H750}) {
    display: block;
  }
`;

export const SectionWrapper = styled.div`
  width: 100%;
  margin-bottom: auto;
  position: relative;

  @media (max-width: ${Breakpoints.H750}) {
    margin-top: 10rem;
  }
`;

export const Sidebar = styled.div`
  margin-right: 5rem;
  width: 40%;

  @media (max-width: ${Breakpoints.H750}) {
    margin-right: 0;
    width: 100%;
  }
`;

export const StyledProfileDetails = styled(ProfileDetails)`
  margin-bottom: 2.5rem;
`;

export const DeleteAccountModal = styled.div<{
  setShow: (value: React.SetStateAction<boolean>) => void;
}>``;
