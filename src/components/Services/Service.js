import React from "react";
import styled from "styled-components";
import Typography from "../../atoms/typography";
import { ImAirplane } from "react-icons/im";

const Service = ({info}) => {
  console.log(info)
  return (
    <StyledService>
      <div className="service-div__icon">{info.icon() || <ImAirplane />}</div>
      <div className="service-div__text">
        <Typography
          className="service-typography__title"
          capitalize
          normal
          bold
        >
          {info.title || "Service"}
        </Typography>
        <Typography capitalize medium>
          {info.description||"Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit."}
        </Typography>
      </div>
    </StyledService>
  );
};

const StyledService = styled.div`
  color: #003151;
  width: 100%;
  text-align: center;
  word-break: normal;

  .service-div__icon {
    font-size: 30px;
  }
  .service-div__text {
    width: 70%;
    margin: 0 auto;
  }
  .service-typography__title {
    margin: 1em 0em;
  }
`;

export default Service;
