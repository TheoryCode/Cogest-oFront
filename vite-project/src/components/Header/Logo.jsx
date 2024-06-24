// src/components/Header/Logo.jsx
import React from "react"; // Importa React para usar JSX
import { Logo as StyledLogo } from "./styles"; // Importa estilo Logo do arquivo styles.js
import icone1 from "../../assets/images/icone1.png"; // Importa a imagem icone1.png

const Logo = () => {
  // Define o componente Logo
  return <StyledLogo src={icone1} alt="Ícone 1" />; // Renderiza a imagem estilizada
};

export default Logo; // Exporta o componente Logo
