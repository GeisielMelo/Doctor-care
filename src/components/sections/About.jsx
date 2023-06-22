import React from "react";
import styled from "styled-components";
import doctor from "../../images/doctor.jpg";

const StyledSection = styled.section`
  background: #fffaf1;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1120px;
  margin: 0 auto;
  gap: 40px;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  flex: 1 1 42rem;
  max-width: 575px;
  background: rgba(0, 133, 111, 0.15);
  border-radius: 20px;
  margin: 160px 0;
  max-width: 480px;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 0px;
    margin-bottom: 100px;
  }
`;

const Content = styled.div`
  flex: 1 1 42rem;
  max-width: 570px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0.08em;
  color: #00856f;

  @media (max-width: 991px) {
    margin-top: 100px;
  }
`;

const Subtitle = styled.h2`
  max-width: 430px;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 52px;
  color: #212529;
`;

const Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #495057;
`;

const About = () => {
  return (
    <StyledSection id="about">
      <Container>
        <Content>
          <Title>SOBRE NÓS</Title>
          <Subtitle>Entenda quem somos e por que existimos</Subtitle>
          <Description>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim. Amet mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim. Amet minim mollit non deserunt ullamco est sit aliqua
            dolor do amet sint. Velit officia consequat duis enim. Amet minim
            mollit non deserunt ullamco est sit aliqua do amet sint. Velit
            officia consequat duis enim. Amet minim mollit non deserunt ullamco
            est sit aliqua dolor do amet sint.
          </Description>
        </Content>
        <Image src={doctor} alt="a black man holding a smart phone." />
      </Container>
    </StyledSection>
  );
};

export default About;
