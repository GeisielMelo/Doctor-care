import React from "react";
import styled from "styled-components";

const StyledLogo = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 1;
  color: #212529;
  ${(props) => props.colorOne && `color: ${props.colorOne}`}
`;

const StyledLogoSpan = styled.span`
  font-weight: 400;
  color: #00856f;
  ${(props) => props.colorTwo && `color: ${props.colorTwo}`}
`;

const Logo = ({ colorOne, colorTwo }) => {
  return (
    <StyledLogo colorOne={colorOne}>
      Doctor<StyledLogoSpan colorTwo={colorTwo}>Care</StyledLogoSpan>
    </StyledLogo>
  );
};

export default Logo;
