import styled from "styled-components";

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 16px 32px;
  background: #00856f;
  border: 1px solid #00856f;
  border-radius: 40px;

  font-style: normal;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 18px;
  text-transform: uppercase;
  white-space: nowrap;
  color: #ffffff;
  cursor: pointer;
`;

export default Button;
