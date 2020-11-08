import React, { useState } from "react";
import SideBar from "../../components/sidebar";
import styled, { css } from "styled-components";
import RightBar from "../../components/rightbar";
import images from "./images.json";



const Home = (props) => {
  
  const { id, handleDiscClick } = props;
  return (
    <StyledHome {...props}>
      <SideBar />
              <RightBar isViewing={id} handleDiscClick={handleDiscClick} />
    </StyledHome>
  );
};

const StyledHome = styled.div`
  background-image: url(${(props) => `./assets/images/${images[props.id]}`});
  background-repeat: no-repeat;
  height: 100vh;
  background-size: cover;
  display: flex;
`;

export default Home;
