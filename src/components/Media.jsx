import React from "react";
import styled from "styled-components";
import { YoutubeIcon, InstagramIcon, FacebookIcon } from "./Icons";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  padding: 20px 0;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const Media = () => {
  return (
    <Container>
      <Button>
        <InstagramIcon />
      </Button>
      <Button>
        <FacebookIcon />
      </Button>
      <Button>
        <YoutubeIcon />
      </Button>
    </Container>
  );
};

export default Media;
