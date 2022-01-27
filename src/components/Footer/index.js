import React from "react";
import { Footers, FooterPart, FooterCPR } from "./styled";

const Footer = () => {
  return (
    <Footers>
      <FooterPart>
        <FooterCPR>
          <h6 className="bold" style={{ textAlign: "center", color: "white" }}>
            Copyrights {new Date().getFullYear()} Thariq Hadyan
          </h6>
        </FooterCPR>
      </FooterPart>
    </Footers>
  );
};

export default Footer;
