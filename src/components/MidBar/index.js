import React from "react";
import styled from "styled-components";
import Typography from "../../atoms/typography";
import { Link } from "react-router-dom";

const MidBar = ({small, underline, normal, bold}) => {
  return (
    <StyledDiv>
      <Typography normal >
        VA Grandizo is a collection of unique pieces of furniture from all over
        the world
        <Typography small underline bold className="typography_text--link">
          <Link to="/about" >LEARN MORE</Link>
        </Typography>
      </Typography>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
padding: 45px 0px;
text-align: center;
color: #003151; 
display: block;
margin: 0 auto;
max-width: 30%;
word-break: break-all;
line-height: 1.5em;

.typography_text--link {
    padding-top: 20px;
}

.typography_text--link a{
    color: #003151 !important;
}
`;

export default MidBar;
