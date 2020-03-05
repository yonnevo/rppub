import React from "react";
import img1 from "../media/social/photo1.png";
import img2 from "../media/social/photo12.png";
import img3 from "../media/social/photo13.png";
import img4 from "../media/social/photo14.png";
import img5 from "../media/social/photo15.png";
import img6 from "../media/social/photo16.png";
import img7 from "../media/social/photo17.png";
import img8 from "../media/social/photo18.png";

import styled from "styled-components";

const openInsta = () => {
  window.location.assign("https://www.instagram.com/roshpina.pub/");
};

function Instagram() {
  const gallery = [img1, img2, img3, img4, img5, img6, img7, img8];
  return (
    <Container>
      <TextContainer>
        <Text>
          <Span>PUBROSHPINA</Span> אינסטגרם
        </Text>
      </TextContainer>
      {gallery.map((x, i) => (
        <Img
          src={x}
          key={i}
          alt="instagram"
          onClick={() => {
            openInsta();
          }}
        />
      ))}
    </Container>
  );
}

export default Instagram;

const Container = styled.div`
  justify-content: center;
  text-align: center;
`;
const TextContainer = styled.div`
  padding-top: 5rem;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 1024px) {
    padding-top: 2rem;
  }
`;

const Text = styled.p`
  font-size: 2rem;
  padding-right: 2.7rem;
  @media (max-width: 1024px) {
    font-size: 1rem;
    margin: auto;
    padding-left: 2rem;
  }
`;

const Span = styled.span`
  font-family: "Suez One";
  color: red;
`;

const Img = styled.img`
  width: 29vw;
  height: 29vw;
  padding: 0.5rem;
  object-fit: cover;
  cursor: pointer;
`;
