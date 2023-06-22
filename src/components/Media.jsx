import React from "react";
import styled from "styled-components";
import { YoutubeIcon, InstagramIcon, FacebookIcon } from "./Icons";
import { instagramUrl, facebookUrl, youTubeUrl } from "../utils/MediaLinks";

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
      <Button onClick={() => instagramUrl("https://github.com/GeisielMelo")}>
        <InstagramIcon />
      </Button >
      <Button onClick={() => facebookUrl("https://github.com/GeisielMelo")}>
        <FacebookIcon />
      </Button>
      <Button onClick={() => youTubeUrl("https://github.com/GeisielMelo")}>
        <YoutubeIcon />
      </Button>
    </Container>
  );
};

export default Media;
