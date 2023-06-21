import React from "react";
import styled from "styled-components";
import Card from "../Card";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1120px;
  gap: 20px;
  margin-bottom: 100px;
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0.08em;
  color: #00856f;
  margin-top: 100px;
`;

const Subtitle = styled.h2`
  max-width: 497px;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 52px;
  text-align: center;
  color: #212529;
  margin-top: 15px;
  margin-bottom: 65px;
`;

const Services = () => {
  return (
    <StyledSection>
      <Title>SERVIÇOS</Title>
      <Subtitle>Como podemos ajudá-lo a se sentir melhor?</Subtitle>
      <Container>
        <Card
          title="Problemas digestivos"
          subtitle="Amet minim mollit non deserunt ullamco est sit aliqua dolor
           do amet sint. Velit officia consequat duis enim."
        />
        <Card
          title="Saúde Hormonal"
          subtitle="Amet minim mollit non deserunt ullamco est sit aliqua dolor
           do amet sint. Velit officia consequat duis enim."
        />
        <Card
          title="Bem-estar mental"
          subtitle="Amet minim mollit non deserunt ullamco est sit aliqua dolor
           do amet sint. Velit officia consequat duis enim."
        />
        <Card
          title="Cuidados Pediátricos"
          subtitle="Amet minim mollit non deserunt ullamco est sit aliqua dolor
           do amet sint. Velit officia consequat duis enim."
        />
        <Card
          title="Autoimune e Inflamação"
          subtitle="Amet minim mollit non deserunt ullamco est sit aliqua dolor
           do amet sint. Velit officia consequat duis enim."
        />
        <Card
          title="Saúde do Coração"
          subtitle="Amet minim mollit non deserunt ullamco est sit aliqua dolor
           do amet sint. Velit officia consequat duis enim."
        />
      </Container>
    </StyledSection>
  );
};

export default Services;
