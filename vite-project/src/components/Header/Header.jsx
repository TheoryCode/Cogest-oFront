// src/components/Header/Header.js
import React from "react";
import { HeaderWrapper, Logo, ButtonHome, ButtonEventos, Nav } from "./Styles";
import icone1 from "../../assets/images/icone1.png";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo src={icone1} alt="icone 1" />
      <Nav>
        <ButtonEventos>Eventos</ButtonEventos>
        <ButtonHome>Home</ButtonHome>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
