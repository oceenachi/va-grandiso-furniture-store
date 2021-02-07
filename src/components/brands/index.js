import React from "react";
import styled from "styled-components";
import Typography from "../../atoms/typography";
import { Link } from "react-router-dom";
import Arrow from "../../atoms/arrow";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Dinning from "../../images/dinning.jpg";

const Brand = () => {
  const clickFunction = () => {};
  return (
    <StyledBrand>
      <div className="brand-section">
        <div className="brand-section-content">
          <div className="brand_text">
            <Typography large>
              We cooperate with many well-known furniture manufacturers
            </Typography>
          </div>
          <div className="brand_carousel">
            <div className="brand-carousel__img">
              <img src={Dinning} style={{height: "auto", width: "100%"}}/>
            </div>
            <div className="brand-arrow">
              {" "}
              <Arrow onClick={clickFunction} icon={BsArrowLeft} />
            </div>
            <div className="brand-carousel__img">
              <img src={Dinning} style={{height: "auto", width: "100%"}}/>
            </div>{" "}
            <div className="brand-arrow">
              {" "}
              <Arrow onClick={clickFunction} icon={BsArrowRight} />
            </div>
            <div className="brand-carousel__img">
              <img src={Dinning} style={{height: "auto", width: "100%"}}/>
            </div>{" "}
          </div>
        </div>
      </div>
      <div>
        {" "}
        <Link>
          <Typography underline className="brand_link">
            SEE ALL BRANDS
          </Typography>
        </Link>
      </div>
    </StyledBrand>
  );
};

const StyledBrand = styled.div`
  color: #003151;
  border: 1px black solid;
  height: 90vh;
  display: flex;
  flex-direction: column;
  text-align: center;

  .brand-section {
    width: 100%;
    background: #dde6ef;
    height: 70vh;
  }

  .brand-section-content {
    border: 1px solid red;
    padding-top: 20px;
    height: 450px;
    transform: translateY(150px);
  }
  .brand_text {
    width: 30%;
    text-align: center;
    border: 1px black solid;
    display: inline-block;
  }
  .brand_carousel {
    border: 1px black solid;
    display: flex;
    overflow: hidden;
  }
  .brand-carousel__img {    
      width: 600px;
  }
  .brand-arrow {
    display: flex;
    justify-content: center;
    width: 120px;
  }
  .brand_link {
    text-decoration: none;
    margin-top: 100px;
  }
`;

export default Brand;
