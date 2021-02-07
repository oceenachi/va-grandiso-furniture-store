import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Typography from "../../atoms/typography";
import BestSellerCard from "../../components/best_seller_card";
import { Link } from "react-router-dom";
import bestSellerProducts from "../../components/best_seller_card/bestSellerProducts";

const BestSellers = () => {
  const [imageToShow, setImageToShow] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [displayNumber, setDisplayNumber] = useState(8);

  useEffect(() => {
    setAllProducts(bestSellerProducts);
    let currentImages = bestSellerProducts.slice(0, displayNumber);
    setImageToShow(currentImages);
  }, []);

  const loadMore=()=>{
    if(displayNumber >= allProducts.length) {
      return;
    }
    const newDisplayNumber = displayNumber + 4;
    setDisplayNumber(newDisplayNumber);
    let currentImages = allProducts.slice(0, newDisplayNumber);
    setImageToShow(currentImages);
  }
  return (
    <StyledBestellers>
      <Typography bold large>
        Best sellers
      </Typography>
      <div className="bestsellers_image">
        {imageToShow.map((elem, index) => {
          return (
            <>
              <div className="bestseller_product--container">
                <BestSellerCard key={index} elem={elem} icon={elem.icon}/>
              </div>
            </>
          );
        })}
      </div>
      {imageToShow.length === allProducts.length ? (
        ""
      ) : (
        <Link onClick={loadMore}>
          <Typography underline className="bestseller_link">
            SEE MORE
          </Typography>
        </Link>
      )}
    </StyledBestellers>
  );
};
const StyledBestellers = styled.div`
  text-align: center;
  padding: 60px 30px;

  .bestsellers_image {
    display: grid;
    margin: 50px 0px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 350px));
    justify-content: center;
    grid-gap: 20px;
    // border: 1px black solid;

    @media (min-width: 2000px) {
      margin: 50px auto;
      width: 85%;
      grid-template-columns: repeat(4, 1fr);
    }
  }
  .bestseller_product--container {
  }
  .bestseller_link {
    text-decoration: none;
  }
`;

export default BestSellers;
