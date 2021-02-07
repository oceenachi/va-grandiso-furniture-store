import React from "react";
import styled from "styled-components";
import Typography from "../../atoms/typography";
import NewIcon from "../newIcon";

const BestSellerCard = ({ elem }) => {
  return (
    <StyledCard className="bestseller-card">
      <div className="bestseller-card__container">
        <NewIcon icon={elem.icon} className="bestseller-card__icon" />
        <div className="bestseller-card__img">
          <img src={elem.url} style={{ height: "auto", width: "100%" }} />
        </div>
      </div>
      <div className="bestseller-card__typography">
        <Typography bold small>
          {elem.designer || "NEW DESIGN"}
        </Typography>
        <Typography small>{elem.name || "New Item"}</Typography>
        <Typography small> {"$" + elem.price || "$5000.00"}</Typography>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  color: #003151;
  height: 400px;
  border: 0.2px #d3d3e3 solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;

  .bestseller-card__container {
    height: 70%;
    position: relative;
    background-size: cover;
    background: #ececec;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bestseller-card__img {
    height: 200px;
    width: 200px;
  }
  .bestseller-card__icon {
    position: absolute;
    top: 18%;
    left: 8%;
  }
  .bestseller-card__typography {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-basis: 20%;
    font-weight: 700;
    padding: 2em;
  }
`;

export default BestSellerCard;
