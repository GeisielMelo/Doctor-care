import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00856f;
  z-index: 9999;
`;

const Menu = () => {
  return (
    <MenuContainer>
      <Logo />
    </MenuContainer>
  );
};
export default Menu;
