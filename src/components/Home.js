import React from "react";
import Neon from "./Neon";
import styled from "styled-components";

function Home(props) {
  const { showIt } = props;

  return (
    <Container showIt={showIt}>
  <Neon />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: ${props => (props.showIt ? `flex` : `none`)};
  justify-content: center;
  @media (max-width: 1024px) {
width: 100%;  }
`;


