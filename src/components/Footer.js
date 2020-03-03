import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <div>
      <Container>
        <Section>
          <P>כתובת</P>
          <P>ברודצקי 17 תל אביב</P>
          <P>טלפון 03-642-7062</P>
        </Section>
        <Section></Section>
        <Section>
          <Section>
            <P>שעות פתיחה</P>
            <P>ראשון עד רביעי 19:45 - 02:30</P>
            <P>חמישי ושישי 19:45 - 03:30</P>
            <P>שבת 19:45 - 02:30</P>
          </Section>
        </Section>
      </Container>
    </div>
  );
}

export default Footer;

const Container = styled.div`
  display: flex;
  height: 10rem;
  background-color: black;
  color: white;
  margin-bottom: 1rem;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  text-align: right;
`;

const P = styled.p`
  font-family: "Suez One";
  padding-right: 0.8rem;
  line-height: 1.8rem;
`;
