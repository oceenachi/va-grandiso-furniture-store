import React, { useState } from "react";
import SideBar from "../../components/sidebar";
import styled, { css } from "styled-components";
import RightBar from "../../components/rightbar";
import images from "./images.json";

import "./style.css";

const Home = (props) => {
  const { id, handleDiscClick } = props;

  return (
    // <TransitionGroup>
    // <CSSTransition key={id} timeout={500} classNames="image_slider">
    <StyledHome {...props}>
      <SideBar />
      <RightBar isViewing={id} handleDiscClick={handleDiscClick} />
    </StyledHome>
    // </CSSTransition>
    // </TransitionGroup>
  );
};

const StyledHome = styled.div`
  background-image: url(${(props) => `./assets/images/${images[props.id]}`});
  background-repeat: no-repeat;
  height: 100vh;
  background-size: cover;
  display: flex;

  .image_slider-enter {
    opacity: 0;
  }
  .image_slider-enter-active {
    opacity: 1;
    transition: opacity 200ms;
  }
  .image_slider-exit {
    opacity: 1;
  }
  .image_slider-exit-active {
    opacity: 0;
    transition: opacity 200ms;
  }
`;

export default Home;
