import React from "react";
import styled from "styled-components";
import { YoutubeIcon, InstagramIcon, FacebookIcon } from "./Icons";
import Logo from "./Logo";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #00453a;
  padding: 80px 122px;
  gap: 36px;

  @media (max-width: 991px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Media = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  margin-right: 32px;
  cursor: pointer;
`;

const Copyright = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  margin-top: 24px;
  color: #fffaf1;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Content>
        <Logo />
        <Copyright>©2022 - DoctorCare.</Copyright>
        <Copyright>Todos os direitos reservados.</Copyright>
      </Content>
      <Media>
        <Button>
          <InstagramIcon />
        </Button>
        <Button>
          <FacebookIcon />
        </Button>
        <Button>
          <YoutubeIcon />
        </Button>
      </Media>
    </StyledFooter>
  );
};

export default Footer;
