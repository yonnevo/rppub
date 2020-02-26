import React, { useState } from "react";
import Header from "./Header";
import logo from "../media/logo.jpg";
import MainMenu from "./MainMenu";
import Video from "./Video";
import Instagram from "./Instagram";
import Footer from "./Footer";
import { SocialIcon } from "react-social-icons";

import food from "../media/food.png";
import drinks from "../media/drinks.png";
import map from "../media/map.png";

import styled from "styled-components";

function App() {
  const [windowView, setWindowView] = useState("home");

  const changeView = str => {
    setWindowView(str);
  };

  return (
    <AppContainer>
      <Header />
      <ImgBox>
        <Logo src={logo} alt="logo" onClick={() => setWindowView("home")} />
      </ImgBox>
      <MainMenu changeView={changeView} windowView={windowView} />
      <MainWindow>
        <Video showIt={windowView === "home"} />
        <Img src={drinks} alt="drinks" showIt={windowView === "drinks"} />
        <Img src={food} alt="food" showIt={windowView === "food"} />
        <Img src={map} alt="map" showIt={windowView === "map"} />
      </MainWindow>
      <Instagram />
      <SocialDiv>
        <Span>
          <SocialIcon url="https://www.facebook.com/RPINAPUB/"/>
        </Span>
        <Span>
          <SocialIcon url="https://www.instagram.com/roshpina.pub/" />
        </Span>
      </SocialDiv>
      <Footer />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100%;
  background-color: white;
`;

const ImgBox = styled.div`
  width: 100%;
  height: 24rem;
  text-align: center;
  @media (max-width: 1024px) {
    height: 13rem;
    line-height: 1.5rem;
  }
`;

const Logo = styled.img`
  padding-top: 3rem;
  height: 20rem;
  :hover {
    animation: local-name 1s both;
    @keyframes local-name {
      0% {
        height: 20rem;
      }
      100% {
        height: 21rem;
      }
    }
  }
  @media (max-width: 1024px) {
    height: 10rem;
  }
`;

const MainWindow = styled.div`
  text-align: center;
  justify-content: center;
`;

const SocialDiv = styled.div`
  text-align: center;
  justify-content: center;
  height: 7rem;
  padding-top: 2rem;
`;

const Span = styled.span`
  margin: 1em;
`;

const Img = styled.img`
  display: ${props => (props.showIt ? `inline` : `none`)};
  width: 824.886px;
  @media (max-width: 1024px) {
    max-width: 260px;
  }
`;
