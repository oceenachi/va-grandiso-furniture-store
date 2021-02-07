import React from 'react';
import styled, {css} from "styled-components";
import Typography from '../typography';

const Button = (props) => {
    console.log(props)
    const {title, children} = props;
    return (
        <StyledButton className="btnLink" {...props} >
            <Typography medium bold>{title || "Button"}</Typography>
        </StyledButton>
    )
}
const StyledButton = styled.button`
    border: none;
    color: black;
    padding: 10px 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 4px 2px;
    cursor: pointer;

    button:active {
        border: none;
    } 
    ${(props) =>
        props.pill &&
        css`
        background-color: #fdc300;
        border-radius: 16px;
        border: none;
        `}
    ${(props) =>
        props.plain_pill &&
        css`
        border-radius: 16px;
        background: white;
        border: 2px black solid;
        `}
    ${(props) =>
        props.squared &&
        css`
        background-color: #fdc300;
        border-radius: 4%;
        padding: 15px 70px;
        width: 100%
        `}

`;

export default Button
