import React from "react";
import styled, { css } from "styled-components";

export default function Typography(props) {

  const { text, children } = props;

  return <TypographyStyle {...props}>{text || children}</TypographyStyle>;
}

const TypographyStyle = styled.p`
  ${(props) =>
    props.underline &&
    css`
      text-decoration: underline;
      text-underline-offset: 5px;
    `}

  ${(props) =>
    props.capitalize &&
    css`
      text-transform: capitalize;
    `}

    ${(props) =>
      props.small &&
      css`
        font-size: 0.5em;
      `}
      ${(props)=>
        props.normal &&
        css`
        font-size: 1.1em;
        `}
        ${(props)=> 
        props.bold && 
        css`
        font-weight: 600;
        `}

`;
