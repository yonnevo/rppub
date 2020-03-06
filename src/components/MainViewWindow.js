import React from "react";

import Home from "./Home";
import About from "./About";
import food from "../media/food.png";
import drinks from "../media/drinks.png";
import map from "../media/map.png";

import styled from "styled-components";

function MainViewWindow(props) {
  const { clicked, windowView, changeClickVal } = props;

  return (
    <Container>
      <Home showIt={windowView === "home"} />
      <Text showIt={windowView !== "home" && windowView !== "about"}>
        {clicked ? "להקטנה" : "להגדלה"} הקישו על התמונה
      </Text>
      <About showIt={windowView === "about"} />
      <About />
      <Img
        src={drinks}
        alt="drinks"
        showIt={windowView === "drinks"}
        enlargeIt={clicked}
        onClick={() => changeClickVal(clicked)}
      />
      <Img
        src={food}
        alt="food"
        showIt={windowView === "food"}
        enlargeIt={clicked}
        onClick={() => changeClickVal(clicked)}
      />
      <Img
        src={map}
        alt="map"
        showIt={windowView === "map"}
        enlargeIt={clicked}
        onClick={() => changeClickVal(clicked)}
      />
    </Container>
  );
}

export default MainViewWindow;

const Container = styled.div`
  text-align: center;
  justify-content: center;
  margin-bottom: 0.5vh;
`;

const Text = styled.div`
  display: ${props => (props.showIt ? `block` : `none`)};
  font-family: "Suez One";
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 2vh;
`;

const Img = styled.img`
  display: ${props => (props.showIt ? `inline` : `none`)};
  width: ${props => (props.enlargeIt ? `100vw` : `824.886px`)};

  @media (max-width: 1024px) {
    max-width: ${props => (props.enlargeIt ? `100vw` : `260px`)};
  }
`;
