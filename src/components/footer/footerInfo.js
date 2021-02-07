import React from "react";
import Typography from "../../atoms/typography";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterInfo = (props) => {
  return (
    <StyledFooterInfo>
      <div>
        <Typography large>{props.title}</Typography>
      </div>
      <div className="footer-text-section">
        <Link>
          <Typography small whiten>{props.subtitle1}</Typography>
        </Link>
        <Link>
          <Typography small whiten>{props.subtitle2}</Typography>
        </Link>
        <Link>
          <Typography small whiten>{props.subtitle3}</Typography>
        </Link>
        <Link>
          <Typography small whiten>{props.subtitle4}</Typography>
        </Link>
      </div>
    </StyledFooterInfo>
  );
};
const StyledFooterInfo = styled.div`

.footer-text-section a{
  text-decoration: none !important;
}
.footer-text-section {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 80px;
  font-size: 1.2em;
  letter-spacing: 0.1em;
  margin-top: 20px;
}

`;
export default FooterInfo;
