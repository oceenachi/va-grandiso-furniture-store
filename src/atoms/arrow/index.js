import React from "react";
import styled from "styled-components";

const Arrow = (props) => {
  return (
    <StyledArrow>
      <div className="arrow_icon" onClick={props.onClick}>
        {props.icon() || "Move"}
      </div>
    </StyledArrow>
  );
};
const StyledArrow = styled.div`
  border: 1.4px black solid;
  border-radius: 50%;
  display: inline-block;
  text-align: center;
  align-self: center;
  .arrow_icon {
    text-align: center;
    padding: 0.3em 0.4em 0.2em 0.4em;
  }
`;

export default Arrow;
