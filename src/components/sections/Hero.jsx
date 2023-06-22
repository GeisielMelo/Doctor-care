import React from "react";
import styled from "styled-components";
import woman from "../../images/woman.png";
import { WhatsAppIcon } from "../Icons";
import Button from "../Button";

const StyledSection = styled.section`
  background: #dce9e2;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 991px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 20px;
  }
`;

const Content = styled.div`
  flex: 1 1 42rem;
  max-width: 605px;

  @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Image = styled.img`
  flex: 1 1 42rem;
  max-width: 420px;
`;

const Title = styled.h1`
  max-width: 585px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0.08em;
  color: #00856f;
`;

const Subtitle = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: clamp(34px, 3vw, 52px);
  line-height: 130%;
  color: #212529;
  margin-top: 16px;
  margin-bottom: 24px;
`;

const Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: clamp(14px, 5vw, 16px);
  line-height: 150%;
  color: #495057;
  margin-bottom: 32px;
`;

const Hero = () => {
  return (
    <StyledSection>
      <Container>
        <Content>
          <Title>BOAS-VINDAS A DOCTORCARE 👋</Title>
          <Subtitle>Assistência médica simplificada para todos</Subtitle>
          <Description>
            Os médicos da DoctorCare vão além dos sintomas para tratar a causa
            raiz de sua doença e proporcionar uma cura a longo prazo.
          </Description>
          <Button>
            <WhatsAppIcon /> Agende sua consulta
          </Button>
        </Content>
        <Image src={woman} alt="woman in a green blouse" />
      </Container>
    </StyledSection>
  );
};

export default Hero;
