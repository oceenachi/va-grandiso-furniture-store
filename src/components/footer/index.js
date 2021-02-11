import React from "react";
import styled from "styled-components";
import Typography from "../../atoms/typography";
import FooterInfo from "./footerInfo";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-top">biggi</div>
      <div className="footer-bottom">
        <div>
          <Typography>VA GRANDISO</Typography>
        </div>
        <div className="footer-midtext">
          <div>
            <FooterInfo
              title="Shop"
              subtitle1="FURNITURE"
              subtitle2="LIGHTING"
              subtitle3="DECORATION"
              subtitle4="ACCESSORIES"
            />{" "}
          </div>
          <div>
            <FooterInfo
              title="For customers"
              subtitle1="BRANDS"
              subtitle2="SALE"
              subtitle3="SHIPPING AND PAYMENT"
              subtitle4="SERVICES"
            />
          </div>
          <div>
            <FooterInfo
              title="Va Grandiso"
              subtitle1="ABOUT"
              subtitle2="JOURNAL"
              subtitle3="PORTFOLIO"
              subtitle4="CONTACTS"
            />
          </div>
        </div>
        <div className="footer-contact-section">
          <div className="footer-icons">
            <GrFacebookOption size={25} />
            <FiTwitter size={25} />
            <IoLogoInstagram size={25} />
          </div>
          <div className="footer-contact">
            <Typography>+7 (812) 955-35-58</Typography>
            <Typography>info@va-grandiso.com</Typography>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};
const StyledFooter = styled.div`
height: 80vh;
display: flex;
flex-direction: column;

border: 1px black solid;
  .footer-top {
  background: white;
  flex: 1;
  padding: 50px;

  }
 
  .footer-bottom {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    background: #003151;
    color: white;
    flex: 1;
    padding: 100px;

    // height: 200px;
    // padding: 80px;

  }

  .footer-midtext {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap:
    
  border: 1px white solid;

  }
  .footer-icons {
    display: flex;
    width: 85%;
    justify-content: space-between;

  }
  .footer-contact-section {
    height: 90px;
    // width: 37%;
    border: 1px white solid;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .footer-contact {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 0.9em;
    line-height: 1.5em;

  }
`;
export default Footer;
