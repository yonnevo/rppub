import React from "react";
import styled from "styled-components";

function MainMenu(props) {
  const { changeView } = props;
  return (
    <div>
      <Container>
        <Section>
          <Text onClick={()=>changeView('map')}>מפת הגעה</Text>
        </Section>
        <Section>
          <Text onClick={()=>changeView('drinks')}>בירה ודרינקים</Text>
        </Section>
        <Section>
          <Text onClick={()=>changeView('food')}>אוכל</Text>
        </Section>
        <Section>
          <Text onClick={()=>changeView('home')}>בית</Text>
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
`;

const Section = styled.div`
  flex-grow: 1;
  text-align: center;
`;

const Text = styled.p`
  margin: auto;
  width: 6rem;
  :hover {
    border-bottom: 1px solid red;
  }
`;
