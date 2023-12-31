import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  position: relative;
  bottom: 50px;
  margin: 0 auto;

  display: flex;
  justify-content: space-around;
  align-items: center;

  max-width: 1050px;
  background: #fffaf1;
  border: 1px solid #dce9e2;
  border-radius: 6px;
  padding: 60px 120px;

  @media (max-width: 991px) {
    flex-direction: column;
    max-width: 330px;
  }
`;

const StyledNumbers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Number = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 130%;
  color: #212529;
`;

const Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #00856f;
`;

const Divider = styled.div`
  border: 1px solid black;
  height: 40px;
  width: 1px;
  margin: 0 20px;

  @media (max-width: 991px) {
    border: none;
  }
`;

const Numbers = () => {
  return (
    <StyledDiv>
      <StyledNumbers>
        <Number>+3.500</Number>
        <Description>Pacientes Atendidos</Description>
      </StyledNumbers>
      <Divider />
      <StyledNumbers>
        <Number>+15</Number>
        <Description>Especialistas Disponíveis</Description>
      </StyledNumbers>
      <Divider />
      <StyledNumbers>
        <Number>+10</Number>
        <Description>Anos no mercado</Description>
      </StyledNumbers>
    </StyledDiv>
  );
};
export default Numbers;
