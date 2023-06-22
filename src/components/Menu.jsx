import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Button from "./Button";
import CloseIcon from "../images/close.png";
import Media from "./Media";
import WhatsAppLink from "../utils/WhatsAppLink"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00856f;
  z-index: 9999;
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-height: 70px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  margin-top: 50px;
  margin-bottom: 20px;
`;

const Item = styled.li`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  margin: 20px 0;
  position: relative;
  cursor: pointer;
  color: #ffffff;
  
  a {
  color: inherit;
}
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

const Menu = ({ closeMenu }) => {
  return (
    <Container>
      <Head>
        <Logo colorOne={"#ffffff"} colorTwo={"#ffffff"} />
        <CloseButton onClick={closeMenu}>
          <img src={CloseIcon} alt="close menu" />
        </CloseButton>
      </Head>

      <List>
        <Item onClick={closeMenu}><a href="#hero">Inicio</a></Item>
        <Item onClick={closeMenu}><a href="#about">Sobre</a></Item>
        <Item onClick={closeMenu}><a href="#services">Serviços</a></Item>
        <Item onClick={closeMenu}><a href="#contact">Depoimentos</a></Item>
      </List>

      <Button onClick={WhatsAppLink}
        style={{
          border: "1px solid #ffffff",
          backgroundColor: "#ffffff",
          color: "#00856f",
          marginBottom: "20px",
        }}
      >
        Agendar consulta
      </Button>
      <Media />
    </Container>
  );
};
export default Menu;
