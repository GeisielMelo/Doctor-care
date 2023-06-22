import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Button from "./Button";
import GreenMenu from "../images/GreenMenu.png";
import Menu from "./Menu";
import WhatsAppLink from "../utils/WhatsAppLink"

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  padding: 0 20px;
  background-color: #dce9e2;
  transition: top 0.2s ease;
  z-index: 1;

  ${(props) => props.navPos && `position: ${props.navPos};`}
  ${(props) => props.navTop && `top: ${props.navTop};`}
  ${(props) => props.backGroundColor && `background-color: ${props.backGroundColor};`}
  left: 0;
  right: 0;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1045px;
  width: 100%;
`;

const List = styled.ul`
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

  a {
    color: inherit;
    ${(props) => props.textColor && `color: ${props.textColor};`}
  }
`;

const HamburgerMenu = styled.button`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const Nav = ({ navPos, navTop, backgroundColor, textColor, borderColor }) => {
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavBar
      navPos={navPos}
      navTop={navTop}
      backGroundColor={backgroundColor}
      textColor={textColor}
      borderColor={borderColor}
    >
      {isMobile === false ? (
        <Container>
          <Logo colorOne={textColor} colorTwo={textColor} />
          <List>
            <Item><a href="#hero">Inicio</a></Item>
            <Item><a href="#about">Sobre</a></Item>
            <Item><a href="#services">Serviços</a></Item>
            <Item><a href="#contact">Depoimentos</a></Item>
          </List>
          <Button onClick={WhatsAppLink}
            style={{borderColor: `${borderColor}` }}>
            Agendar consulta
          </Button>
        </Container>
      ) : (
        <Container>
          <Logo colorOne={textColor} colorTwo={textColor} />
          <HamburgerMenu onClick={toggleMenu}>
            <img src={GreenMenu} alt="" />
          </HamburgerMenu>
          {isMenuOpen && <Menu closeMenu={() => setIsMenuOpen(false)} />}
        </Container>
      )}
    </NavBar>
  );
};

export default Nav;
