import React from "react";

import Home from "./Home";
import About from "./About";
import food from "../media/food.png";
import drinks from "../media/drinks.png";
import map from "../media/map.png";

import { Icon } from "@iconify/react";
import wazeIcon from "@iconify/icons-fa-brands/waze";

import styled from "styled-components";

function MainViewWindow(props) {
  const { clicked, windowView, changeClickVal } = props;

  const showWindow = str => {
    return windowView === str;
  };

  return (
    <Container>
      <Home showIt={showWindow("home")} />
      <Text showIt={windowView !== "home" && windowView !== "about"}>
        {clicked ? "להקטנה" : "להגדלה"} הקישו על התמונה
      </Text>
      <About showIt={showWindow("about")} />
      <About />
      <Img
        src={drinks}
        alt="drinks"
        showIt={showWindow("drinks")}
        enlargeIt={clicked}
        onClick={() => changeClickVal(clicked)}
      />
      <Img
        src={food}
        alt="food"
        showIt={showWindow("food")}
        enlargeIt={clicked}
        onClick={() => changeClickVal(clicked)}
      />
      <Img
        showIt={showWindow("map")}
        src={map}
        alt="map"
        enlargeIt={clicked}
        onClick={() => changeClickVal(clicked)}
      />
      <WazeBox showIt={showWindow("map")}>
        <Text showIt={showWindow("map")}>
          הקישו לניווט ב Waze
          <Waze href="waze://?ll=32.1070993,34.7997234">
            <Icon icon={wazeIcon} />
          </Waze>
        </Text>
      </WazeBox>
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
  direction: rtl;
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

const WazeBox = styled.div`
  display: ${props => (props.showIt ? `block` : `none`)};
  margin-top: 1rem;
`;

const Waze = styled.a`
  margin-right: 10px;
  font-size: 1.5rem;
  border: 1px solid transparent;
  border-radius: 50%;
  color: white;
  background-color: rgb(59, 89, 152);
  padding: 0.5rem;
`;
