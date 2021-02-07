import React from "react";
import ImageCard from "../verticalImageCard";
import styled from "styled-components";
import images from "../verticalImageCard/images.json";
const ProductSample = () => {
  return (
    <StyledProduct className="productsample-imagecard__display">
      <div className="top-image-card">
        <ImageCard image={images[0]} />
        <ImageCard image={images[1]} />
      </div>

      <div className="bottom-image-card">
        <ImageCard image={images[2]} />
        <ImageCard image={images[3]} />
      </div>
    </StyledProduct>
  );
};
const StyledProduct = styled.div`
  display: grid;
  grid-row-gap: 1em;
  padding: 60px 20px;

  .top-image-card {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-column-gap: 1em;
  }

  .bottom-image-card {
    display: grid;
    grid-column-gap: 1em;
    grid-template-columns: 1fr 2fr;
  }
`;
export default ProductSample;
