import React from "react";
import styled from "styled-components";

const StyledLogo = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 1;
  color: #212529;
`;

const StyledLogoSpan = styled.span`
  font-weight: 400;
  color: #00856f;
`;

const Logo = () => {
  return (
    <StyledLogo>
      Doctor<StyledLogoSpan>Care</StyledLogoSpan>
    </StyledLogo>
  );
};

export default Logo;
