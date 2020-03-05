import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <div>
      <Container>
        <Section>
          <P>:כתובת</P>
          <P>ברודצקי 17 תל אביב</P>
          <Num href="tel:+972 3-642-7062">03-6427062</Num>
        </Section>
        <Section>
          <P>:שעות פתיחה </P>
          <P>א' עד ד' 19:30 - 02:30 </P>
          <P>חמישי 19:30 - 03:30 </P>
          <P>שישי 20:15 - 03:30 </P>
          <P>שבת 19:30 - 02:30 </P>
        </Section>
      </Container>
    </div>
  );
}

export default Footer;

const Container = styled.div`
  display: flex;
  height: 10rem;
  max-width: 100vw;
  background-color: black;
  color: white;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  text-align: right;
  margin-bottom: 1rem;
`;

const P = styled.p`
  white-space: pre !important;
  font-family: "Suez One";
  padding-right: 0.8rem;
  font-size: 80%;
  line-height: 1.8rem;
  @media (max-width: 1024px) {
    font-size: 80%;
  }
`;
const Num = styled.a`
  font-family: "Suez One";
  padding-right: 0.8rem;
  line-height: 1.8rem;
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
