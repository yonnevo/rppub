import React, { useState } from "react";
import Header from "./Header";
import logo from "../media/logo.jpg";
import MainMenu from "./MainMenu";
import Video from "./Video";
import food from "../media/food.png";
import drinks from "../media/drinks.png";
import map from "../media/map.png";
import InstagramGallery from "./InstagramGallery";

import styled from "styled-components";

function App() {
  const INSTAGRAM_ID = "3468531814";
  const THUMBNAIL_WIDTH = 640;
  const PHOTO_COUNT = 60;
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
      <MainMenu changeView={changeView} />
      <MainWindow>
        <Video showIt={windowView === "home"} />
        <Img src={drinks} alt="drinks" showIt={windowView === "drinks"} />
        <Img src={food} alt="food" showIt={windowView === "food"} />
        <Img src={map} alt="map" showIt={windowView === "map"} />
      </MainWindow>
      <div><InstagramGallery
    userId={INSTAGRAM_ID}
    thumbnailWidth={THUMBNAIL_WIDTH}
    photoCount={PHOTO_COUNT}
  /></div>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  background-color: white;
`;

const ImgBox = styled.div`
  width: 100%;
  height: 24rem;
  text-align: center;
`;

const Logo = styled.img`
  padding-top: 3rem;
  height: 20rem;
  :hover {
    height: 21rem;
  }
`;

const MainWindow = styled.div`
  text-align: center;
  justify-content: center;
`;

const Img = styled.img`
  display: ${props => (props.showIt ? `inline` : `none`)};
  width: 824.886px;
`;
