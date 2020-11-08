import React, { useState } from "react";
import styled from "styled-components";
import Disc from "../../atoms/disc";

const RightBar = ({isViewing, handleDiscClick}) => {

  return (
    <StyledRightBar>
      <div className="rightbar-disc__text-block">
        {[...Array(4)].map((elem, index) => (
          <Disc key={index} id={index} active={isViewing === index} onClick={handleDiscClick} />
        ))}
      </div>
    </StyledRightBar>
  );
};

const StyledRightBar = styled.div`
  position: relative;
  width: 66.6%;

  /* Bottom right disc */
  .rightbar-disc__text-block {
    position: absolute;
    bottom: 40px;
    right: 25px;
    width: 100px;
    border: none;
    display: flex;
    justify-content: space-between;
  }
`;

export default RightBar;
