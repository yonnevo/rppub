import React from "react";
import styled from "styled-components";

function MainMenu(props) {
  const { changeView, windowView } = props;
  return (
    <div>
      <Container>
        <Section>
          <Text
            onClick={() => changeView("map")}
            underline={windowView === "map"}
          >
            מפת הגעה
          </Text>
        </Section>
        <Section>
          <Text
            onClick={() => changeView("drinks")}
            underline={windowView === "drinks"}
          >
            בירה ודרינקים
          </Text>
        </Section>
        <Section>
          <Text
            onClick={() => changeView("food")}
            underline={windowView === "food"}
          >
            אוכל
          </Text>
        </Section>
        <Section>
          <Text
            onClick={() => changeView("about")}
            underline={windowView === "about"}
          >
            מי אנחנו?
          </Text>
        </Section>
        <Section>
          <Text
            onClick={() => changeView("home")}
            underline={windowView === "home"}
          >
            בית
          </Text>
        </Section>
      </Container>
    </div>
  );
}

export default MainMenu;

const Container = styled.div`
  padding: 5px;
  width: 60%;
  height: 50px;
  margin: 1rem auto;
  display: flex;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    height: 80px;
    margin-bottom: 1rem;
  }
`;

const Section = styled.div`
  flex-grow: 1;
  text-align: center;
`;

const Text = styled.p`
  direction: rtl;
  font-family: "Suez One";
  margin: auto;
  width: 6rem;
  cursor: pointer;
  border-bottom: ${props =>
    props.underline ? `2px red solid` : `2px transparent solid`};
  :hover {
        color: red	;
      }
`;
