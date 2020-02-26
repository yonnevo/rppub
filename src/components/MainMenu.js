import React from "react";
import styled from "styled-components";

function MainMenu(props) {
  const { changeView, windowView } = props;
  return (
    <div>
      <Container>
        <Section>
          <Text onClick={() => changeView("map")} underline={windowView === 'map'}>מפת הגעה</Text>
        </Section>
        <Section>
          <Text onClick={() => changeView("drinks")} underline={windowView === 'drinks'}>בירה ודרינקים</Text>
        </Section>
        <Section>
          <Text onClick={() => changeView("food")} underline={windowView === 'food'}>אוכל</Text>
        </Section>
        <Section>
          <Text onClick={() => changeView("home")} underline={windowView === 'home'}>בית</Text>
        </Section>
      </Container>
    </div>
  );
}

export default MainMenu;

const Container = styled.div`
  width: 60%;
  height: 50px;
  margin: 2rem auto;
  display: flex;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  height: 3rem;
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
  font-weight: bolder;
  margin: auto;
  width: 6rem;
  border-bottom: ${props => (props.underline ? `2px red solid` : `none`)};
  :hover {
    animation: borderline 1s both;
    @keyframes borderline {
      0% {
        border-bottom: none;
      }
      100% {
        border-bottom: 2px red solid;
      }
    }
  }
`;
