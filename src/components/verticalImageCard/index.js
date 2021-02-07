import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import Typography from "../../atoms/typography";

const ImageCard = ({image}) => {
  return (
    <StyledImageDiv image={image} >
      <div className="imageCard_text">
        <Typography capitalize large>
          {image.title || "BigImage"}
        </Typography>
        <Typography small underline bold className="imageCard_text--link">
          <Link to="/discover">DISCOVER</Link>
        </Typography>
      </div>
    </StyledImageDiv>
  );
};

const StyledImageDiv = styled.div`
  height: 300px;
  background-image: url(${({image}) => `./assets/images/${image.imageName}`});
  background-size: cover;
  color: white !important;
  letter-spacing: 0.08em;
  font-weight: 300;
  position: relative;
  padding: 20px;

  .imageCard_text {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .imageCard_text--link a {
    color: white !important;
    text-decoration: none;
  }
  .imageCard_text--link {
    margin-top: 1.5em;
    letter-spacing: 0.3em;
  }
`;

export default ImageCard;
