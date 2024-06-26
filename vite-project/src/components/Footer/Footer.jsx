// src/components/Footer/Footer.jsx
import React from "react";
import { FooterWrapper, Logo2, ContactInfo } from "./Styles";
import icone2 from "../../assets/images/icone2.png";

const Footer = () => {
  return (
    <FooterWrapper>
      <Logo2 src={icone2} alt="icone 2" />
      <ContactInfo>
        <p>Contato: casatuetimbua@gmail.com</p>
        <p>Telefone: (37) 9 9634 9759</p>
      </ContactInfo>
    </FooterWrapper>
  );
};

export default Footer;
