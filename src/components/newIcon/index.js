import React from 'react'
import styled from "styled-components";
import Typography from '../../atoms/typography';

const NewIcon = (props) => {
    return (
        <StyledIcon {...props}>
            <Typography small whiten bold>{props.icon || "NEW"}
            </Typography>                 
        </StyledIcon>
    )
}
const StyledIcon = styled.div`
background: ${(props)=> props.icon==="NEW"? "#003151": props.icon==="HOT"? "#ed1c24": "#003151"};
height: 50px;
width: 50px;
border-radius: 50%;
font-color: white;
letter-spacing: 0.1em;
display: flex;
justify-content: center;
align-items: center;
`;
export default NewIcon
