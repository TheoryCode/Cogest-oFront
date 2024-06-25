// src/components/Header/Header.js
import React from "react";
import { HeaderWrapper, Nav } from "./Styles";
import Logo from "./Logo";
import ButtonEventos from "../Buttons/ButtonEventos";
import ButtonHome from "../Buttons/ButtonHome";
const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <ButtonEventos />
        <ButtonHome />
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
