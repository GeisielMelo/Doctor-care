import React from "react";
import styled from "styled-components";
import { CheckIcon } from "./Icons";

const Container = styled.div`
  width: 347px;
  height: 207px;
  padding: 20px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

  background: #ffffff;
  border: 1px solid #dce9e2;
  border-radius: 6px;
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 31px;
  text-align: left;
  color: #212529;
  margin: 16px 0;
`;

const Subtitle = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #495057;
`;

const Card = ({ title, subtitle }) => {
  return (
    <Container>
      <CheckIcon />
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
};

export default Card;
