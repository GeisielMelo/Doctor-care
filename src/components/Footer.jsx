import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Media from "./Media";

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
    padding: 80px 20px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
      <Container>
        <Logo />
        <Copyright>©2022 - DoctorCare.</Copyright>
        <Copyright>Todos os direitos reservados.</Copyright>
      </Container>
      <Media />
    </StyledFooter>
  );
};

export default Footer;
