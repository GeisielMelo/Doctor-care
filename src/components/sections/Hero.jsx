import React from "react";
import styled from "styled-components";
import Numbers from "../Numbers";
import woman from "../../images/woman.png";
import whatsapp from "../../images/whatsapp.png";

const StyledSection = styled.section`
  background: #dce9e2;
`;

const StyledHero = styled.div`
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

const StyledHeroText = styled.div`
  flex: 1 1 42rem;
  max-width: 605px;

  @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const StyledHeroImage = styled.img`
  flex: 1 1 42rem;
  max-width: 420px;
`;

const StyledH1 = styled.h1`
  max-width: 585px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0.08em;
  color: #00856f;
`;

const StyledH2 = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: clamp(34px, 3vw, 52px);
  line-height: 130%;
  color: #212529;
  margin-top: 16px;
  margin-bottom: 24px;
`;

const StyledP = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: clamp(14px, 5vw, 16px);
  line-height: 150%;
  color: #495057;
  margin-bottom: 32px;
`;

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 16px 32px;
  background: #00856f;
  border-radius: 40px;

  font-style: normal;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 18px;
  text-transform: uppercase;
  color: #ffffff;
`;

const StyledWhatsApp = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 16px;
`;

const Hero = () => {
  return (
    <StyledSection>
      <StyledHero>
        <StyledHeroText>
          <StyledH1>BOAS-VINDAS A DOCTORCARE 👋</StyledH1>
          <StyledH2>Assistência médica simplificada para todos</StyledH2>
          <StyledP>
            Os médicos da DoctorCare vão além dos sintomas para tratar a causa
            raiz de sua doença e proporcionar uma cura a longo prazo.
          </StyledP>
          <StyledButton>
            <StyledWhatsApp src={whatsapp} alt="whatsapp icon" /> Agende sua
            consulta
          </StyledButton>
        </StyledHeroText>
        <StyledHeroImage src={woman} alt="woman in a green blouse" />
      </StyledHero>
    </StyledSection>
  );
};

export default Hero;
