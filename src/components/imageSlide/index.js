import React from 'react'
import styled from "styled-components";


const ImageSlide = (props) => {
    const clickFunction = ()=> {

    }
    return (
        
        <StyledSlide {...props}>
          <img/>
        </StyledSlide>
    )
}
const StyledSlide = styled.div`
background: url(${(props) => `./assets/images/${props.url}`});
background-size: cover;
background-position: center;`;

export default ImageSlide
