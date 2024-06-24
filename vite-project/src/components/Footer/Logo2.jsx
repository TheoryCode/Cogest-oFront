import React from "react"; // Importa React para usar JSX
import { Logo as StyledLogo } from "./styles"; // Importa estilo Logo do arquivo styles.js
import icone2 from "../../assets/images/icone2.png"; // Importa a imagem icone1.png

const Logo = () => {
  // Define o componente Logo
  return <StyledLogo src={icone2} alt="Ícone 2" />; // Renderiza a imagem estilizada
};

export default Logo; // Exporta o componente Logo
