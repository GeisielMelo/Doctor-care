import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Button from "./Button";
import GreenMenu from "../images/GreenMenu.png";

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  padding: 0 20px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1045px;
  width: 100%;
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  height: 100%;
`;

const Item = styled.li`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  margin: 0 20px;
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -20px;
    width: 100%;
    height: 2px;
    background-color: transparent;
    transition: background-color 0.3s ease;
  }

  &:hover::after {
    background-color: #000;
  }

  &.selected::after {
    background-color: #f00;
  }
`;

const HamburgerMenu = styled.button`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <NavBar>
      {isMobile === false ? (
        <Container>
          <Logo />
          <Menu>
            <Item>Inicio</Item>
            <Item>Sobre</Item>
            <Item>Serviços</Item>
            <Item>Depoimentos</Item>
          </Menu>
          <Button>Agendar consulta</Button>
        </Container>
      ) : (
        <Container>
          <Logo />
          <HamburgerMenu onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <img src={GreenMenu} alt="" />
          </HamburgerMenu>
        </Container>
      )}
    </NavBar>
  );
};

export default Nav;
