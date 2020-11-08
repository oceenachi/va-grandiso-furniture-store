import React from "react";
import styled from "styled-components";

export default function Disc({ id, active, onClick }) {
  return (
    <StyledDisc id={id} active={active} onClick={onClick}>
      <div className="hero-disc__normal" id={id} />
    </StyledDisc>
  );
}

const StyledDisc = styled.a`
  .hero-disc__normal {
    border: 1.5px white solid;
    border-radius: 50px;
    width: 8px;
    height: 8px;
    cursor: pointer;
    background-color: ${(props) => (props.active ? "white" : null)};
  }
`;
