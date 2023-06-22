import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { WhatsAppIcon, PinIcon, MailIcon } from "../Icons";
import man from "../../images/man.jpg";
import WhatsAppLink from "../../utils/WhatsAppLink";

const StyledSection = styled.section`
  background: none;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1120px;
  margin: 0 auto;
`;

const Image = styled.img`
  flex: 1 1 42rem;
  max-width: 575px;
  background: rgba(0, 133, 111, 0.15);
  border-radius: 20px;
  margin: 160px 0;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 80px;
    margin-bottom: 100px;
  }
`;

const Content = styled.div`
  flex: 1 1 42rem;
  max-width: 350px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 52px;
  color: #212529;
  margin-bottom: 40px;
`;

const Address = styled.p`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #495057;
  margin-bottom: 16px;
`;

const Contact = () => {
  return (
    <StyledSection id="contact">
      <Container>
        <Content>
          <Title>Entre em contato com a gente!</Title>
          <Address>
            <PinIcon />
            R. Amauri Souza, 346
          </Address>
          <Address>
            <MailIcon />
            contato@doctorcare.com
          </Address>
          <Button onClick={WhatsAppLink}>
            <WhatsAppIcon />
            Agende sua consulta
          </Button>
        </Content>
        <Image src={man} alt="a black man holding a smart phone." />
      </Container>
    </StyledSection>
  );
};
export default Contact;
