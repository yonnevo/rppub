import React from "react";
import styled from "styled-components";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

function Header() {
  const openFace = () => {
    window.location.assign("https://www.facebook.com/RPINAPUB/");
  };
  const openInsta = () => {
    window.location.assign("https://www.instagram.com/roshpina.pub/");
  };

  return (
    <div>
      <Container>
        <Section>
          להזמנת מקומות   :
          <NumBox href="tel:+972 3-642-7062">03-6427062</NumBox>
        </Section>
        <Section></Section>
        <SocialSection>
          <Socialbox>
            <FaInstagram
              onClick={() => {
                openInsta();
              }}
              style={{ cursor: "pointer" }}
            />
          </Socialbox>
          <Socialbox>
            <FaFacebookSquare
              onClick={() => {
                openFace();
              }}
              style={{ cursor: "pointer" }}
            />
          </Socialbox>
        </SocialSection>
      </Container>
    </div>
  );
}

export default Header;

const Container = styled.header`
  display: flex;
  height: 3rem;
  background-color: black;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Section = styled.div`
  flex-grow: 1;
  text-align: center;
  font-family: "Suez One";
`;
const SocialSection = styled.div`
  flex-grow: 1;
  text-align: center;
  padding-top: 0.5rem;
`;
const NumBox = styled.a`
  /* border: solid 1px red; */
  padding-right: 0.25rem;
  text-decoration: none;
  color: white;
  :hover {
    animation: changeColor 1s both;
    @keyframes changeColor {
      0% {
        color: white;
      }
      100% {
        color: #add8e6;
      }
    }
  }
`;
const Socialbox = styled.span`
  /* border: solid 1px red; */
  font-size: 2.7rem;
  padding-left: 0.25rem;
  :hover {
    animation: changeColor 1s both;
    @keyframes changeColor {
      0% {
        color: white;
      }
      100% {
        color: #add8e6;
      }
    }
  }
`;
