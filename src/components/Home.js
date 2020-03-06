import React from "react";
// import Neon from "./Neon";
import allWeekImg from "../media/rpweekday.jpg";
import weekendimg from "../media/girlweekend.jpg";
import styled from "styled-components";

function Home(props) {
  const { showIt } = props;
  const day = new Date().getDay();

  const photo = day < 4 ? allWeekImg : weekendimg;
  return (
    <Container showIt={showIt}>
      <Img src={photo} alt="pub main banner" />
      {/* <Neon /> */}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: ${props => (props.showIt ? `flex` : `none`)};
  justify-content: center;
`;

const Img = styled.img`
  width: 60vw;
  @media (max-width: 1024px) {
    width: 100vw;
    object-fit: scale-down;
  }
`;
