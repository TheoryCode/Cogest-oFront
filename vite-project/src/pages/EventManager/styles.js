import styled from "styled-components";

export const TituloAdd = styled.div`
  margin-top: 20px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.7rem;
  color: antiquewhite;
  text-align: center;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    left: -15%;
    bottom: -3px; /* Ajuste a posição vertical do sublinhado */
    width: 100%;
    height: 2px; /* Espessura do sublinhado */
    background-color: #ffd599; /* Cor do sublinhado */
  }

  @media (max-width: 280px) {
    font-size: 1.2rem;
  }
`;
export const TituloGerenciar = styled.div`
  margin-top: 20px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.7rem;
  color: antiquewhite;
  text-align: center;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    left: -15%;
    bottom: -3px; /* Ajuste a posição vertical do sublinhado */
    width: 100%;
    height: 2px; /* Espessura do sublinhado */
    background-color: #ffd599; /* Cor do sublinhado */
  }

  @media (max-width: 280px) {
    font-size: 1.2rem;
  }
`;
