import React, { useState, useEffect } from "react";
import Header from "./Header";
import logo from "../media/logo.jpg";
import MainMenu from "./MainMenu";
import MainViewWindow from "./MainViewWindow";
import Instagram from "./Instagram";
import Footer from "./Footer";
import { SocialIcon } from "react-social-icons";

import styled from "styled-components";

function App() {
  const [windowView, setWindowView] = useState("home");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      setClicked(false);
    }
    // eslint-disable-next-line
  }, [windowView]);

  const changeView = str => {
    setWindowView(str);
  };

  const changeClickVal = (boolean) => {
    setClicked(!boolean);
  };

  return (
    <AppContainer>
      <Header />
      <LogoBox>
        <Logo src={logo} alt="logo" onClick={() => setWindowView("home")} />
      </LogoBox>
      <MainMenu changeView={changeView} windowView={windowView} />
      <MainViewWindow clicked={clicked} windowView={windowView} changeClickVal={changeClickVal}/>
      <Instagram />
      <SocialDiv>
        <Span>
          <SocialIcon url="https://www.facebook.com/RPINAPUB/" />
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

const LogoBox = styled.div`
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
    animation: shake 0.5s;
    animation-iteration-count: infinite;
  }

  @keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(3px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }
  @media (max-width: 1024px) {
    height: 10rem;
  }
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
