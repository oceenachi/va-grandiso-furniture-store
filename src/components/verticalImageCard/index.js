import React from 'react'
import styled, {css} from "styled-components";

const ImageCard = () => {
    return (
        <div>
            Big Image
            
        </div>
    )
}

const StyledImageDiv = styled.div`
${(props)=> 
    props.defaultCard && css`

    `}
`;

export default ImageCard
