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
      text-underline-offset: 3px;
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
    ${(props) =>
      props.medium &&
      css`
        font-size: 0.7
        em;
      `}
      ${(props) =>
    props.large &&
    css`
      font-size: 1.5em;
    `}
        ${(props) =>
    props.whiten &&
    css`
      color: white;
    `}
      ${(props) =>
    props.normal &&
    css`
      font-size: 1.1em;
    `}
        ${(props) =>
    props.bold &&
    css`
      font-weight: 500;
    `}
`;
